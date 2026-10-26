import React from 'react';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="border-t border-gray-800 bg-bg-card mt-16 px-6 py-8 text-text-muted text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold font-heading text-primary">GameAcademy</span>
          <span className="text-xs text-text-muted">© {new Date().getFullYear()} — M1 ESGI IW</span>
        </div>

        <div className="flex flex-wrap gap-6 text-xs">
          <button 
            onClick={onOpenLegal} 
            className="hover:text-text-main transition cursor-pointer bg-transparent border-none p-0"
          >
            Mentions légales
          </button>
          <button 
            onClick={onOpenLegal} 
            className="hover:text-text-main transition cursor-pointer bg-transparent border-none p-0"
          >
            Politique de confidentialité
          </button>
          <button 
            onClick={onOpenLegal} 
            className="hover:text-text-main transition cursor-pointer bg-transparent border-none p-0"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}