import { GoogleGenAI, Type } from "@google/genai";
import { NewsData } from "../types";

const FALLBACK_THUMBNAILS = [
  'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614728853980-6043080c3f5e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop'
];

const searchUrl = (query: string) => `https://www.google.com/search?q=${encodeURIComponent(query)}`;

export const fetchLiveSpaceNews = async (): Promise<NewsData> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("Gemini API Key is missing. Please check your environment configuration.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    // Upgraded to Gemini 3 Pro for better reasoning and larger context handling
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: "Generate a comprehensive list of recent and upcoming space news (focus on 2025-2026). I need 10 news articles for EACH agency (NASA, ESA, JAXA, ISRO, CNSA, Roscosmos, CSA, SpaceX) and 12 upcoming major space launches/missions. For every item, provide a specific projected date. For launches, explicitly identify the agency. Ensure high factual accuracy.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            launches: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  category: { type: Type.STRING, enum: ["Mission", "Satellite", "Probe"] },
                  date: { type: Type.STRING },
                  agency: { type: Type.STRING }
                },
                required: ["title", "description", "category", "date", "agency"]
              }
            },
            nasa: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["title", "summary", "date"]
              }
            },
            esa: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["title", "summary", "date"]
              }
            },
            jaxa: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["title", "summary", "date"]
              }
            },
            isro: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["title", "summary", "date"]
              }
            },
            cnsa: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["title", "summary", "date"]
              }
            },
            roscosmos: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["title", "summary", "date"]
              }
            },
            csa: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["title", "summary", "date"]
              }
            },
            spacex: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["title", "summary", "date"]
              }
            }
          },
          required: ["nasa", "esa", "jaxa", "isro", "cnsa", "roscosmos", "csa", "spacex", "launches"]
        }
      }
    });

    const textResponse = response.text;

    if (!textResponse) {
      throw new Error("Gemini returned an empty response.");
    }

    let data;
    try {
      data = JSON.parse(textResponse);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      throw new Error("Failed to parse data from Gemini. The response was not valid JSON.");
    }
    
    const formatArticles = (articles: any[], prefix: string) => 
      articles.map((item: any, idx: number) => ({ 
        ...item, 
        id: `${prefix}-live-${Date.now()}-${idx}`, // Unique ID with timestamp
        url: searchUrl(`${item.title} 2025 2026 space news`)
      }));

    const launches = data.launches.map((item: any, idx: number) => ({
      ...item,
      id: `launch-live-${Date.now()}-${idx}`,
      videoUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " space launch 2025 2026")}`,
      thumbnailUrl: FALLBACK_THUMBNAILS[idx % FALLBACK_THUMBNAILS.length]
    }));

    return {
      launches,
      nasa: formatArticles(data.nasa, 'nasa'),
      esa: formatArticles(data.esa, 'esa'),
      jaxa: formatArticles(data.jaxa, 'jaxa'),
      isro: formatArticles(data.isro, 'isro'),
      cnsa: formatArticles(data.cnsa, 'cnsa'),
      roscosmos: formatArticles(data.roscosmos, 'ros'),
      csa: formatArticles(data.csa, 'csa'),
      spacex: formatArticles(data.spacex, 'sx'),
    };

  } catch (error: any) {
    console.error("Service Error:", error);
    // Rethrow with user-friendly messages if not already handled
    if (error.message.includes("API Key")) throw error;
    if (error.message.includes("JSON")) throw error;
    
    throw new Error(`Connection error: ${error.message || "Unknown error occurred"}`);
  }
};