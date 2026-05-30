import React from 'react';
import { ExternalLink, ArrowRight, X } from 'lucide-react';

interface RedirectModalProps {
  targetUrl: string | null;
  onClose: () => void;
}

const RedirectModal: React.FC<RedirectModalProps> = ({ targetUrl, onClose }) => {
  if (!targetUrl) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <div className="relative bg-white text-gray-900 rounded-xl shadow-2xl w-full max-w-sm overflow-hidden animate-bounce-in">
        
        <button onClick={onClose} className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ExternalLink className="w-8 h-8 text-blue-600" />
            </div>
            
            <h3 className="text-xl font-bold mb-2">Leaving News Space</h3>
            <p className="text-gray-500 text-sm mb-6">
                You are about to view external content from the source.
            </p>

            <a 
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
                Continue to Article
                <ArrowRight className="w-4 h-4" />
            </a>
            
            <button 
                onClick={onClose}
                className="mt-4 text-sm text-gray-400 hover:text-gray-600"
            >
                Cancel
            </button>
        </div>
      </div>
    </div>
  );
};

export default RedirectModal;