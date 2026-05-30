import React, { useState, useEffect } from 'react';
import { X, Bell, Calendar, Rocket, Star } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState({
    dailyBriefing: false,
    launchAlerts: false,
    discoveries: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('newsSpace_notifications');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const toggleSetting = (key: keyof typeof settings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    localStorage.setItem('newsSpace_notifications', JSON.stringify(newSettings));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#1A233A] text-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-700 overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-700 flex justify-between items-center bg-[#0B1026]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/20 rounded-lg">
                <Bell className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-xl font-bold">Updates & Alerts</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-gray-400">
            Customize your feed. Get notified when Gemini detects new missions or major cosmic events.
          </p>

          <div className="space-y-4">
            
            {/* Daily Briefing */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer" onClick={() => toggleSetting('dailyBriefing')}>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-medium">Daily Briefing</h3>
                  <p className="text-xs text-gray-500">Summary of the day's top space news.</p>
                </div>
              </div>
              <div className={`w-10 h-5 rounded-full flex items-center transition-colors p-1 ${settings.dailyBriefing ? 'bg-blue-600' : 'bg-gray-700'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow transition-transform ${settings.dailyBriefing ? 'translate-x-5' : 'translate-x-0'}`}></div>
              </div>
            </div>

            {/* Launch Alerts */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer" onClick={() => toggleSetting('launchAlerts')}>
              <div className="flex items-center gap-3">
                <Rocket className="w-5 h-5 text-orange-400" />
                <div>
                  <h3 className="font-medium">Launch Alerts</h3>
                  <p className="text-xs text-gray-500">Notifications 1 hour before liftoff.</p>
                </div>
              </div>
              <div className={`w-10 h-5 rounded-full flex items-center transition-colors p-1 ${settings.launchAlerts ? 'bg-blue-600' : 'bg-gray-700'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow transition-transform ${settings.launchAlerts ? 'translate-x-5' : 'translate-x-0'}`}></div>
              </div>
            </div>

            {/* Discoveries */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer" onClick={() => toggleSetting('discoveries')}>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-purple-400" />
                <div>
                  <h3 className="font-medium">Major Discoveries</h3>
                  <p className="text-xs text-gray-500">Breaking news on scientific breakthroughs.</p>
                </div>
              </div>
              <div className={`w-10 h-5 rounded-full flex items-center transition-colors p-1 ${settings.discoveries ? 'bg-blue-600' : 'bg-gray-700'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow transition-transform ${settings.discoveries ? 'translate-x-5' : 'translate-x-0'}`}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/20 text-center">
            <p className="text-xs text-gray-500">
                Data provided by Gemini 3 Pro. Updates occur automatically.
            </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;