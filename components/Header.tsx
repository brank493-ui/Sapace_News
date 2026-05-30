import React from 'react';
import { Rocket, Bell } from 'lucide-react';

interface HeaderProps {
  onNotificationClick: () => void;
  hasNotifications?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNotificationClick, hasNotifications = false }) => {
  return (
    <header className="bg-space-dark text-white py-4 px-6 md:px-12 flex items-center justify-between shadow-lg z-50 relative border-b border-gray-800">
      <div className="flex items-center gap-2">
        <Rocket className="w-6 h-6 text-blue-500 transform -rotate-45" />
        <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          NEWS SPACE
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={onNotificationClick}
          className="relative p-2 hover:bg-white/10 rounded-full transition-colors group"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-gray-300 group-hover:text-white" />
          {hasNotifications && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;