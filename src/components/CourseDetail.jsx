import React, { useState } from 'react';
import styles from './CourseBadge.module.scss';
import CoachModal from './CoachModal';

export default function CourseDetail({ course, onBack, onBook }) {
  const [showCoachModal, setShowCoachModal] = useState(false);

  if (!course) return null;

  return (
    <section className="p-6 max-w-4xl mx-auto min-h-screen bg-bg-main text-text-main">
      <button
        onClick={onBack}
        className="mb-6 min-h-[44px] px-4 py-2 bg-bg-card hover:bg-bg-card-hover border border-gray-800 rounded-lg text-text-muted transition flex items-center gap-2 cursor-pointer"
      >
        ← Retour au catalogue
      </button>

      <div className="bg-bg-card rounded-xl border border-gray-800 overflow-hidden">
        <div className="relative aspect-video w-full bg-black">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute top-4 left-4">
            <span className={styles.badgeLevel}>{course.level}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl font-bold font-heading text-primary">
              {course.title}
            </h1>
            <span className="text-2xl font-extrabold text-accent">{course.price}</span>
          </div>

          <p className="text-text-muted mb-6 leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-text-muted border-t border-b border-gray-800 py-4 mb-6">
            <div className="flex flex-wrap gap-6 items-center">
              <p>Jeu : <span className="text-text-main font-semibold">{course.game}</span></p>
              <div className="flex items-center gap-2">
                <span>Coach : <strong className="text-accent">{course.coach}</strong></span>
                {/* Bouton Voir le Profil */}
                <button
                  onClick={() => setShowCoachModal(true)}
                  className="min-h-[44px] px-3 py-1 text-xs bg-bg-main hover:bg-bg-card-hover border border-accent/40 text-accent rounded-lg transition cursor-pointer flex items-center gap-1 font-semibold"
                >
                  👤 Voir le profil
                </button>
              </div>
              <p>Durée : <span className="text-text-main font-semibold">{course.duration}</span></p>
              <p>Note : <span className="text-text-main font-semibold">⭐ {course.rating} / 5</span></p>
            </div>
          </div>

          <button 
            onClick={onBook}
            className="w-full min-h-[44px] py-3 bg-accent hover:bg-accent-hover text-bg-main font-bold rounded-lg transition cursor-pointer"
          >
            Réserver ce cours
          </button>
        </div>
      </div>

      {/* Affichage conditionnel de la modale coach */}
      {showCoachModal && (
        <CoachModal
          coachName={course.coach}
          onClose={() => setShowCoachModal(false)}
        />
      )}
    </section>
  );
}