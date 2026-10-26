import React, { useState } from 'react';
import CourseList from './components/CourseList';
import BookingForm from './components/BookingForm';
import CourseDetail from './components/CourseDetail';
import LegalNotice from './components/LegalNotice';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setCurrentView('detail');
  };

  const handleToggleFavorite = (courseId) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId) 
        : [...prev, courseId]
    );
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-main flex flex-col justify-between">
      <div>
        <header className="border-b border-gray-800 bg-bg-card px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <h1 
            onClick={() => setCurrentView('home')} 
            className="text-2xl font-bold font-heading text-primary cursor-pointer"
          >
            GameAcademy
          </h1>

          <nav className="flex gap-4 items-center">
            <button
              onClick={() => setCurrentView('home')}
              className={`min-h-[44px] px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
                currentView === 'home' ? 'bg-primary text-white' : 'text-text-muted hover:text-text-main'
              }`}
            >
              Cours
            </button>
            <button
              onClick={() => setCurrentView('booking')}
              className={`min-h-[44px] px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
                currentView === 'booking' ? 'bg-primary text-white' : 'text-text-muted hover:text-text-main'
              }`}
            >
              Réserver
            </button>
          </nav>
        </header>

        <main>
          {currentView === 'home' && (
            <div>
              <section className="px-6 py-12 text-center bg-gradient-to-b from-bg-card to-bg-main border-b border-gray-800">
                <h2 className="text-4xl font-extrabold mb-4 font-heading text-primary">
                  Passez au niveau supérieur dans le Jeu Vidéo
                </h2>
                <p className="text-text-muted max-w-xl mx-auto mb-6">
                  Des cours particuliers et ateliers animés par des runners et pros de la scène e-sport.
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('courses-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-h-[44px] px-8 py-3 bg-accent hover:bg-accent-hover text-bg-main font-bold rounded-lg transition cursor-pointer"
                >
                  Découvrir nos cours
                </button>
              </section>
              <div id="courses-section">
                <CourseList 
                  onSelectCourse={handleSelectCourse} 
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              </div>
            </div>
          )}

          {currentView === 'booking' && (
            <BookingForm onBack={() => setCurrentView('home')} />
          )}

          {currentView === 'detail' && (
            <CourseDetail 
              course={selectedCourse} 
              onBack={() => setCurrentView('home')} 
              onBook={() => setCurrentView('booking')}
            />
          )}

          {currentView === 'legal' && (
            <LegalNotice onBack={() => setCurrentView('home')} />
          )}
        </main>
      </div>

      <Footer onOpenLegal={() => setCurrentView('legal')} />
    </div>
  );
}