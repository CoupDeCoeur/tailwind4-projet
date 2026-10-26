import React from 'react';
import styles from './CourseBadge.module.scss';

export default function CourseDetail({ course, onBack, onBook }) {
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

          <div className="flex flex-wrap gap-6 text-sm text-text-muted border-t border-b border-gray-800 py-4 mb-6">
            <p>Jeu : <span className="text-text-main font-semibold">{course.game}</span></p>
            <p>Coach : <span className="text-accent font-semibold">{course.coach}</span></p>
            <p>Durée : <span className="text-text-main font-semibold">{course.duration}</span></p>
            <p>Note : <span className="text-text-main font-semibold">⭐ {course.rating} / 5</span></p>
          </div>

          <button 
            onClick={onBook}
            className="w-full min-h-[44px] py-3 bg-accent hover:bg-accent-hover text-bg-main font-bold rounded-lg transition cursor-pointer"
          >
            Réserver ce cours
          </button>
        </div>
      </div>
    </section>
  );
}