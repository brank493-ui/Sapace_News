import React from 'react';

interface AgencyIconProps {
  agency: string;
  className?: string;
}

const AgencyIcon: React.FC<AgencyIconProps> = ({ agency, className = "w-6 h-6" }) => {
  const normalized = agency?.toUpperCase().trim() || '';

  // Helper to match partial strings for robust rendering
  const is = (name: string) => normalized.includes(name);

  if (is('NASA')) {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="currentColor" />
        <path d="M15 65C35 60 75 40 85 25" stroke="white" strokeWidth="8" strokeLinecap="round"/>
        <text x="50" y="65" textAnchor="middle" fill="white" fontSize="26" fontWeight="900" style={{ fontFamily: 'serif' }}>NASA</text>
      </svg>
    );
  }

  if (is('ESA')) {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="3" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <path d="M22 26h8M22 20h8M22 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (is('SPACEX')) {
    return (
      <svg className={className} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 18L30 2M30 18L10 2" stroke="currentColor" strokeWidth="3" />
        <path d="M80 18C90 12 95 8 100 2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (is('JAXA')) {
    return (
      <svg className={className} viewBox="0 0 50 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L15 18H5L10 2Z" />
        <path d="M20 2v16h12" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (is('ISRO')) {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5L28 35H12L20 5Z" fill="currentColor" />
        <path d="M5 25H35" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (is('CNSA')) {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5C10 5 5 15 8 30C12 38 28 38 32 30C35 15 30 5 20 5Z" stroke="currentColor" strokeWidth="2" />
        <path d="M18 15L24 12L22 18" fill="currentColor" />
      </svg>
    );
  }

  if (is('ROSCOSMOS') || is('ROS')) {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M20 8L22 18H32L24 24L27 34L20 28L13 34L16 24L8 18H18L20 8Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
  }

  if (is('CSA')) {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M20 8L23 16L30 17L24 22L26 30L20 26L14 30L16 22L10 17L17 16L20 8Z" fill="currentColor" />
      </svg>
    );
  }

  // Default fallback (Generic Rocket)
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
};

export default AgencyIcon;