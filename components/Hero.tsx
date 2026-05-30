import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="h-48 md:h-64 w-full flex items-center justify-center relative overflow-hidden bg-[#0B1026]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2048&auto=format&fit=crop" 
                alt="Space background" 
                className="w-full h-full object-cover opacity-80"
            />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/30 via-transparent to-[#0B1026] pointer-events-none z-10"></div>
        
        <div className="relative z-20 text-center px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase drop-shadow-lg">
                Your Universe of Updates
            </h1>
        </div>
    </div>
  );
};

export default Hero;