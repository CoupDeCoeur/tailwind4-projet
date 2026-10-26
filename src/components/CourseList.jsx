import React, { useState } from 'react';
import coursesData from '../data/courses.json';
import styles from './CourseBadge.module.scss';

export default function CourseList({ onSelectCourse }) {
  const [selectedGame, setSelectedGame] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const games = ['All', ...new Set(coursesData.map(c => c.game))];
  const levels = ['All', 'Débutant', 'Avancé', 'Expert'];
  const priceRanges = [
    { label: 'Tous les prix', value: 'All' },
    { label: 'Moins de 30 €', value: 'under-30' },
    { label: '30 € - 40 €', value: '30-40' },
    { label: 'Plus de 40 €', value: 'above-40' },
  ];

  // Extraction du prix numérique depuis la string (ex: "29€" -> 29)
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  const filteredCourses = coursesData.filter(course => {
    const matchesGame = selectedGame === 'All' || course.game === selectedGame;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    const numericPrice = parsePrice(course.price);
    let matchesPrice = true;

    if (selectedPriceRange === 'under-30') {
      matchesPrice = numericPrice < 30;
    } else if (selectedPriceRange === '30-40') {
      matchesPrice = numericPrice >= 30 && numericPrice <= 40;
    } else if (selectedPriceRange === 'above-40') {
      matchesPrice = numericPrice > 40;
    }

    return matchesGame && matchesLevel && matchesPrice;
  });

  const handleReset = () => {
    setSelectedGame('All');
    setSelectedLevel('All');
    setSelectedPriceRange('All');
  };

  return (
    <section className="p-6 max-w-7xl mx-auto min-h-screen bg-bg-main text-text-main">
      <h2 className="text-3xl font-bold mb-6 font-heading text-primary">
        Catalogue des Cours
      </h2>

      {/* Barre de filtres complète */}
      <div className="flex flex-wrap gap-6 mb-8 items-center bg-bg-card p-4 rounded-xl border border-gray-800">
        <div>
          <label htmlFor="game-select" className="block text-sm font-medium mb-1 text-text-muted">
            Jeu
          </label>
          <select
            id="game-select"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            className="min-h-[44px] px-4 py-2 bg-bg-main border border-gray-700 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          >
            {games.map(game => (
              <option key={game} value={game}>{game === 'All' ? 'Tous les jeux' : game}</option>
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
            className="min-h-[44px] px-4 py-2 bg-bg-main border border-gray-700 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          >
            {levels.map(level => (
              <option key={level} value={level}>{level === 'All' ? 'Tous les niveaux' : level}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price-select" className="block text-sm font-medium mb-1 text-text-muted">
            Tranche de Prix
          </label>
          <select
            id="price-select"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className="min-h-[44px] px-4 py-2 bg-bg-main border border-gray-700 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          >
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Affichage des cours ou Empty State */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 bg-bg-card rounded-xl border border-gray-800">
          <p className="text-xl text-text-muted mb-4">Aucun cours ne correspond à vos critères de recherche.</p>
          <button
            onClick={handleReset}
            className="min-h-[44px] px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition cursor-pointer"
          >
            Réinitialiser les filtres
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