import React from 'react';
import { NewsArticle } from '../types';
import { ExternalLink, ArrowRight, Share2, Copy } from 'lucide-react';
import AgencyIcon from './AgencyIcon';

interface NewsCardProps {
  article?: NewsArticle;
  loading?: boolean;
  agency?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, loading = false, agency }) => {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!article) return;

    // Generate internal redirect link
    const appUrl = window.location.origin;
    const redirectLink = `${appUrl}?redirect=${encodeURIComponent(article.url)}`;

    const shareData = {
      title: article.title,
      text: `Read this space update on News Space: ${article.title}`,
      url: redirectLink
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(redirectLink);
        alert('Link to this article copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  if (loading) {
    return (
      <div className="relative bg-space-card overflow-hidden rounded-lg shadow-xl h-full min-h-[240px] min-w-[320px] flex flex-col p-6 animate-pulse snap-center border border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-space-card via-[#1e2942] to-[#111827] opacity-100 z-0"></div>
        <div className="relative z-10 flex flex-col h-full">
            <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-gray-600 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3 mb-auto"></div>
            <div className="h-8 bg-gray-700 rounded w-1/2 mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <a 
      href={article?.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative bg-space-card overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[240px] min-w-[320px] flex flex-col p-6 snap-center border border-gray-800 cursor-pointer"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-card via-[#1e2942] to-[#111827] z-0"></div>
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Date & Metadata */}
        <div className="flex justify-between items-start mb-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded">
                {article?.date}
            </span>
            <div className="flex items-center gap-3">
                <button 
                  onClick={handleShare}
                  className="text-gray-500 hover:text-blue-400 transition-colors z-20 p-1 rounded-full hover:bg-white/5"
                  title="Share Link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
            </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors">
          {article?.title}
        </h3>
        
        {/* Summary */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {article?.summary}
        </p>

        {/* Footer: Read More & Agency Icon */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
           <div className="flex items-center text-sm font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
              Read Article
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
           </div>

           {/* Agency Icon in corner */}
           {agency && (
             <div className="text-gray-600 group-hover:text-gray-400 transition-colors opacity-50 group-hover:opacity-100">
                <AgencyIcon agency={agency} className="w-8 h-8" />
             </div>
           )}
        </div>
      </div>
    </a>
  );
};

export default NewsCard;