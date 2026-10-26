import React, { useState } from 'react';
import coursesData from '../data/courses.json';
import styles from './CourseBadge.module.scss';

export default function CourseList({ onSelectCourse }) {
  const [selectedGame, setSelectedGame] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const games = ['All', ...new Set(coursesData.map(c => c.game))];
  const levels = ['All', 'Débutant', 'Avancé', 'Expert'];

  const filteredCourses = coursesData.filter(course => {
    const matchesGame = selectedGame === 'All' || course.game === selectedGame;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesGame && matchesLevel;
  });

  return (
    <section className="p-6 max-w-7xl mx-auto min-h-screen bg-bg-main text-text-main">
      <h2 className="text-3xl font-bold mb-6 font-heading text-primary">
        Catalogue des Cours
      </h2>

      <div className="flex flex-wrap gap-6 mb-8 items-center bg-bg-card p-4 rounded-xl border border-gray-800">
        <div>
          <label htmlFor="game-select" className="block text-sm font-medium mb-1 text-text-muted">
            Jeu
          </label>
          <select
            id="game-select"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            className="min-h-[44px] px-4 py-2 bg-bg-main border border-gray-700 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {games.map(game => (
              <option key={game} value={game}>{game}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="level-select" className="block text-sm font-medium mb-1 text-text-muted">
            Niveau
          </label>
          <select
            id="level-select"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="min-h-[44px] px-4 py-2 bg-bg-main border border-gray-700 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 bg-bg-card rounded-xl border border-gray-800">
          <p className="text-xl text-text-muted mb-4">Aucun cours ne correspond à tes critères.</p>
          <button
            onClick={() => { setSelectedGame('All'); setSelectedLevel('All'); }}
            className="min-h-[44px] px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition cursor-pointer"
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="bg-bg-card hover:bg-bg-card-hover rounded-xl overflow-hidden border border-gray-800 transition cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={styles.badgeLevel}>{course.level}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-mono text-accent">
                    {course.price}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={styles.badgeCategory}>{course.game}</span>
                    <span className="text-xs text-text-muted">⏱ {course.duration}</span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-text-muted mt-2">Coach : <span className="text-accent">{course.coach}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}