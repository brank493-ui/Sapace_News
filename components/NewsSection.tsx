import React from 'react';
import { NewsArticle } from '../types';
import NewsCard from './NewsCard';

interface NewsSectionProps {
  agency: string;
  articles: NewsArticle[];
  logoType: 'NASA' | 'ESA' | 'JAXA' | 'ISRO' | 'CNSA' | 'ROSCOSMOS' | 'CSA' | 'SPACEX';
  loading?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ agency, articles, logoType, loading = false }) => {
  
  const renderLogo = () => {
    switch (logoType) {
      case 'NASA':
        return (
          <div className="flex items-center gap-3">
            <svg className="h-14 w-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NASA Logo">
              <circle cx="50" cy="50" r="48" fill="#0B3D91" />
              <ellipse cx="50" cy="50" rx="42" ry="12" transform="rotate(-20 50 50)" stroke="white" strokeWidth="2" fill="none" />
              <path d="M15 65C35 60 75 40 85 25" stroke="#FC3D21" strokeWidth="8" strokeLinecap="round"/>
              <text x="50" y="60" textAnchor="middle" fill="white" fontSize="26" fontWeight="900" style={{ fontFamily: 'serif', letterSpacing: '1px' }}>NASA</text>
            </svg>
            <span className="text-2xl font-bold text-gray-800">NASA</span>
          </div>
        );
      case 'ESA':
        return (
          <div className="flex items-center gap-3">
            <svg className="h-10 w-auto" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ESA Logo">
              <circle cx="20" cy="20" r="18" stroke="#003399" strokeWidth="3" />
              <circle cx="16" cy="16" r="2" fill="#003399" />
              <text x="50" y="28" fill="#003399" fontSize="24" fontWeight="bold" style={{ fontFamily: 'Arial, sans-serif' }}>esa</text>
            </svg>
            <span className="text-xl font-bold text-gray-800">European Space Agency</span>
          </div>
        );
      case 'JAXA':
        return (
          <div className="flex items-center gap-3">
             <svg className="h-10 w-auto" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="JAXA Logo">
              <text x="0" y="32" fill="#005BAC" fontSize="36" fontWeight="900" style={{ fontFamily: 'Arial Black, sans-serif', letterSpacing: '-1px' }}>JAXA</text>
              <path d="M48 4L56 32H40L48 4Z" fill="#005BAC" /> {/* Stylized A */}
              <path d="M44 22H52" stroke="white" strokeWidth="3" />
            </svg>
             <span className="text-lg font-bold text-gray-600">Japan Aerospace Exploration Agency</span>
          </div>
        );
      case 'ISRO':
        return (
           <div className="flex items-center gap-3">
            <svg className="h-12 w-auto" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ISRO Logo">
              <path d="M25 5L35 50H15L25 5Z" fill="#FF6F00" />
              <path d="M5 30H45" stroke="#FF6F00" strokeWidth="2" />
              <path d="M10 40H40" stroke="#FF6F00" strokeWidth="2" />
              <path d="M15 50H35" stroke="#FF6F00" strokeWidth="2" />
            </svg>
            <span className="text-2xl font-bold text-[#FF6F00]">ISRO</span>
          </div>
        );
      case 'CNSA':
        return (
           <div className="flex items-center gap-3">
            <svg className="h-12 w-auto" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CNSA Logo">
              <path d="M30 5C15 5 5 20 10 40C15 55 45 55 50 40C55 20 45 5 30 5ZM30 50C25 45 25 35 30 30L35 25" stroke="#0D47A1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25 20L35 15L32 25" fill="#0D47A1" />
            </svg>
            <span className="text-2xl font-bold text-[#0D47A1]">CNSA</span>
          </div>
        );
      case 'ROSCOSMOS':
        return (
          <div className="flex items-center gap-3">
            <svg className="h-12 w-auto" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Roscosmos Logo">
              <circle cx="30" cy="30" r="28" stroke="#D32F2F" strokeWidth="2" />
              <path d="M30 10L35 25H50L38 35L43 50L30 40L17 50L22 35L10 25H25L30 10Z" fill="none" stroke="#D32F2F" strokeWidth="2"/>
              <path d="M10 45L50 15" stroke="#D32F2F" strokeWidth="1" />
            </svg>
            <span className="text-xl font-bold text-[#D32F2F]">ROSCOSMOS</span>
          </div>
        );
      case 'CSA':
        return (
           <div className="flex items-center gap-3">
            <svg className="h-12 w-auto" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CSA Logo">
              <circle cx="30" cy="30" r="28" stroke="#B71C1C" strokeWidth="2" />
              <path d="M30 10L36 22L48 24L38 32L42 45L30 38L18 45L22 32L12 24L24 22L30 10Z" fill="#B71C1C" />
              <path d="M10 20Q30 5 50 20" stroke="#B71C1C" strokeWidth="2" fill="none" />
            </svg>
            <span className="text-xl font-bold text-gray-800">CSA / ASC</span>
          </div>
        );
      case 'SPACEX':
        return (
            <div className="flex items-center gap-3">
              <svg className="h-10 w-auto" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SpaceX Logo">
                <path d="M15 35L40 5M40 35L15 5" stroke="#000" strokeWidth="5" strokeLinecap="square" />
                <path d="M45 5H100M45 35H100M45 20H80" stroke="#000" strokeWidth="0" />
                <text x="50" y="30" fill="#000" fontSize="32" fontWeight="900" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '2px' }}>SPACEX</text>
                <path d="M160 35C180 25 190 15 200 5" stroke="#000" strokeWidth="3" fill="none" />
              </svg>
              <span className="sr-only">SpaceX</span>
            </div>
        );
      default:
        return null;
    }
  }

  return (
    <section className="py-8 border-b border-gray-200 last:border-0">
      <div className="mb-6">
        {renderLogo()}
      </div>

      {/* Horizontal scrolling container */}
      <div className="flex overflow-x-auto pb-4 gap-6 snap-x scroll-smooth">
        {loading 
          ? Array.from({ length: 6 }).map((_, index) => (
              <NewsCard key={`skeleton-${index}`} loading={true} />
            ))
          : articles.map((article) => (
              <NewsCard key={article.id} article={article} agency={logoType} />
            ))
        }
      </div>
    </section>
  );
};

export default NewsSection;