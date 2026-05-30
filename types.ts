export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  url: string;
}

export interface LaunchItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: 'Mission' | 'Satellite' | 'Probe';
  date: string;
  agency: string;
}

export interface AgencyNews {
  agencyName: string;
  articles: NewsArticle[];
}

export interface NewsData {
  nasa: NewsArticle[];
  esa: NewsArticle[];
  jaxa: NewsArticle[];
  isro: NewsArticle[];
  cnsa: NewsArticle[];
  roscosmos: NewsArticle[];
  csa: NewsArticle[];
  spacex: NewsArticle[];
  launches: LaunchItem[];
}