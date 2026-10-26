import React from 'react';
import coachesData from '../data/coaches.json';

export default function CoachModal({ coachName, onClose }) {
  const coach = coachesData[coachName] || {
    name: coachName,
    realName: "Coach Membre GameAcademy",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    bio: "Coach certifié passionné par le jeu vidéo et la transmission de compétences.",
    achievements: ["Coach Certifié GameAcademy"],
    specialties: ["Gaming", "Speedrun"],
    rating: 4.8
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-bg-card border border-gray-800 rounded-xl max-w-md w-full p-6 relative shadow-2xl animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-main text-xl font-bold min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Fermer"
        >
          ✕
        </button>

        <div className="flex items-center gap-4 mb-4">
          <img
            src={coach.avatar}
            alt={coach.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <h3 className="text-xl font-bold font-heading text-primary">{coach.name}</h3>
            <p className="text-xs text-text-muted">{coach.realName}</p>
            <p className="text-sm text-accent font-semibold mt-1">⭐ {coach.rating} / 5</p>
          </div>
        </div>

        <p className="text-sm text-text-muted mb-4 leading-relaxed">
          {coach.bio}
        </p>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-text-main uppercase tracking-wider mb-2">Spécialités</h4>
          <div className="flex flex-wrap gap-2">
            {coach.specialties.map((spec, i) => (
              <span key={i} className="px-2.5 py-1 bg-primary/20 text-primary text-xs rounded-md font-medium">
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-text-main uppercase tracking-wider mb-2">Hauts faits & Titres</h4>
          <ul className="list-disc list-inside text-xs text-text-muted space-y-1">
            {coach.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full min-h-[44px] bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition cursor-pointer"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}