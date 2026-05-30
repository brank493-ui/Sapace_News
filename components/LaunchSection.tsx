import React from 'react';
import { LaunchItem } from '../types';
import LaunchCard from './LaunchCard';
import { Rocket } from 'lucide-react';

interface LaunchSectionProps {
  launches: LaunchItem[];
  loading?: boolean;
}

const LaunchSection: React.FC<LaunchSectionProps> = ({ launches, loading = false }) => {
  return (
    <section className="py-8 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-red-600 p-2 rounded-lg text-white">
            <Rocket className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Latest Launches & Missions</h2>
      </div>

      <div className="flex overflow-x-auto pb-6 gap-6 snap-x scroll-smooth">
        {loading 
          ? Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="min-w-[300px] h-[250px] bg-gray-800 rounded-xl animate-pulse"></div>
            ))
          : launches.map((launch) => (
              <LaunchCard key={launch.id} launch={launch} />
            ))
        }
      </div>
    </section>
  );
};

export default LaunchSection;
