import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import LaunchSection from './components/LaunchSection';
import Footer from './components/Footer';
import SearchControls from './components/SearchControls';
import NotificationModal from './components/NotificationModal';
import RedirectModal from './components/RedirectModal';
import { INITIAL_NEWS_DATA } from './constants';
import { NewsData, NewsArticle } from './types';
import { fetchLiveSpaceNews } from './services/geminiService';
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

// Configuration for rendering agency sections dynamically
const AGENCY_CONFIG = [
  { id: 'nasa', name: 'NASA', logoType: 'NASA', filterName: 'NASA' },
  { id: 'esa', name: 'ESA', logoType: 'ESA', filterName: 'ESA' },
  { id: 'spacex', name: 'SpaceX', logoType: 'SPACEX', filterName: 'SpaceX' },
  { id: 'jaxa', name: 'JAXA (Japan)', logoType: 'JAXA', filterName: 'JAXA' },
  { id: 'isro', name: 'ISRO (India)', logoType: 'ISRO', filterName: 'ISRO' },
  { id: 'cnsa', name: 'CNSA (China)', logoType: 'CNSA', filterName: 'CNSA' },
  { id: 'roscosmos', name: 'Roscosmos (Russia)', logoType: 'ROSCOSMOS', filterName: 'Roscosmos' },
  { id: 'csa', name: 'CSA (Canada)', logoType: 'CSA', filterName: 'CSA' },
] as const;

const App: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsData>(INITIAL_NEWS_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modals
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [redirectTarget, setRedirectTarget] = useState<string | null>(null);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [agencyFilter, setAgencyFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Handle Shared Link Redirection
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get('redirect');
    if (redirectUrl) {
      setRedirectTarget(decodeURIComponent(redirectUrl));
      // Clean URL without reloading
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const liveData = await fetchLiveSpaceNews();
      setNewsData(liveData);
      setIsLive(true);
    } catch (err: any) {
      console.error("Fetch Error:", err);
      // Display the specific error message from the service
      setError(err.message || "An unexpected error occurred while contacting the stars.");
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch and Auto-Update Polling
  useEffect(() => {
    // Fetch immediately on mount
    handleRefresh();

    // Set up auto-update polling (every 5 minutes)
    const intervalId = setInterval(() => {
      console.log("Auto-updating space data...");
      handleRefresh();
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  // --- Filtering Logic ---

  // 1. Filter Launches
  const filteredLaunches = newsData.launches.filter(launch => {
    const matchesSearch = 
      launch.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      launch.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'All' || launch.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // 2. Filter News Data Helper
  const getFilteredArticles = (articles: NewsArticle[]) => {
    if (!articles) return [];
    return articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      <Header 
        onNotificationClick={() => setIsNotificationModalOpen(true)} 
        hasNotifications={isLive} // Show dot when live data is active
      />
      <Hero />

      {/* Redirect Modal */}
      <RedirectModal 
        targetUrl={redirectTarget} 
        onClose={() => setRedirectTarget(null)} 
      />

      {/* Notification Settings Modal */}
      <NotificationModal 
        isOpen={isNotificationModalOpen} 
        onClose={() => setIsNotificationModalOpen(false)} 
      />

      <main className="flex-grow container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-6xl overflow-hidden">
        
        {/* Controls Row: Live Update Button & Error Message */}
        <div className="flex flex-col md:flex-row justify-end items-center mb-6 gap-4">
             {error && (
                <div className="text-red-500 text-sm flex items-center gap-2 bg-red-50 px-3 py-1 rounded-lg border border-red-100 animate-pulse">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}
            <button 
                onClick={handleRefresh}
                disabled={isLoading}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-300 ${
                    isLive 
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 hover:bg-emerald-200'
                    : 'bg-white text-space-dark border border-gray-200 hover:bg-gray-50 hover:border-blue-300'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                {isLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                    <Sparkles className={`w-4 h-4 ${isLive ? 'text-emerald-600' : 'text-purple-600'}`} />
                )}
                {isLoading ? 'Fetching from Gemini 3 Pro...' : isLive ? 'Live Auto-Updates Active' : 'Scan for Future Updates'}
            </button>
        </div>

        {/* Search & Filter Component */}
        <SearchControls 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          agencyFilter={agencyFilter}
          setAgencyFilter={setAgencyFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        {/* Launch Section */}
        {(isLoading || filteredLaunches.length > 0) && (
          <div className="mb-10 animate-fade-in-up">
             <LaunchSection launches={filteredLaunches} loading={isLoading} />
          </div>
        )}
        
        {!isLoading && filteredLaunches.length === 0 && searchTerm && (
          <div className="text-center py-8 text-gray-500 italic">
            No launches found matching "{searchTerm}"
          </div>
        )}

        {/* News Sections */}
        <div className="bg-transparent space-y-10">
            {AGENCY_CONFIG.map((config) => {
              // Check if agency matches filter
              if (agencyFilter !== 'All' && agencyFilter !== config.filterName) return null;

              const rawArticles = newsData[config.id as keyof NewsData] as NewsArticle[];
              const filteredArticles = getFilteredArticles(rawArticles);

              // Don't render section if no articles match search (unless loading)
              if (!isLoading && filteredArticles.length === 0) return null;

              return (
                <NewsSection 
                    key={config.id}
                    agency={config.name}
                    logoType={config.logoType as any}
                    articles={filteredArticles} 
                    loading={isLoading}
                />
              );
            })}
            
            {/* Global "No Results" state */}
            {!isLoading && 
              AGENCY_CONFIG.every(conf => 
                (agencyFilter !== 'All' && agencyFilter !== conf.filterName) || 
                getFilteredArticles(newsData[conf.id as keyof NewsData] as NewsArticle[]).length === 0
              ) && (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-500 text-lg">No news updates found.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setAgencyFilter('All');}}
                  className="mt-4 text-blue-600 hover:underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;