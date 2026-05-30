import React from 'react';
import { LaunchItem } from '../types';
import { Play, Share2 } from 'lucide-react';
import AgencyIcon from './AgencyIcon';

interface LaunchCardProps {
  launch: LaunchItem;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Generate internal redirect link
    const appUrl = window.location.origin;
    const redirectLink = `${appUrl}?redirect=${encodeURIComponent(launch.videoUrl)}`;

    const shareData = {
      title: launch.title,
      text: `Watch this launch: ${launch.title}`,
      url: redirectLink
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(redirectLink);
        alert('Link to launch video copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <a 
      href={launch.videoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block bg-space-card overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 min-w-[300px] snap-center border border-gray-800"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img 
          src={launch.thumbnailUrl} 
          alt={launch.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition-all shadow-xl border border-white/30">
             <Play className="w-8 h-8 text-white fill-current" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow">
          {launch.category}
        </div>

        {/* Date Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded border border-white/10">
          {launch.date}
        </div>

        {/* Agency Icon Badge (Bottom Right) */}
        {launch.agency && (
            <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm p-1.5 rounded-full border border-white/10 text-white/80 group-hover:text-white transition-colors">
                <AgencyIcon agency={launch.agency} className="w-5 h-5" />
            </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-gray-900 text-white relative">
        <div className="pr-8">
            <h3 className="text-md font-bold mb-1 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
            {launch.title}
            </h3>
            <p className="text-gray-400 text-xs line-clamp-2">
            {launch.description}
            </p>
        </div>
        
        <button 
          onClick={handleShare}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-20 p-1 rounded-full hover:bg-white/10"
          title="Share Launch"
        >
           <Share2 className="w-4 h-4" />
        </button>
      </div>
    </a>
  );
};

export default LaunchCard;