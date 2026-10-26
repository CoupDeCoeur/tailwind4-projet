import React, { useState } from 'react';

export default function BookingForm({ onBack }) {
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('Les Bases du Speedrun : Hollow Knight Any%');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !date) {
      setError('Tous les champs sont requis');
      return;
    }
    setError('');
    setSuccess(true);
  };

  return (
    <section className="p-6 max-w-xl mx-auto min-h-screen bg-bg-main text-text-main">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-6 min-h-[44px] px-4 py-2 bg-bg-card hover:bg-bg-card-hover border border-gray-800 rounded-lg text-text-muted transition flex items-center gap-2 cursor-pointer"
        >
          ← Retour
        </button>
      )}

      <h2 className="text-3xl font-bold mb-6 font-heading text-primary">
        Réserver un Cours
      </h2>

      {success ? (
        <div className="bg-bg-card p-6 rounded-xl border border-gray-800 text-center">
          <p className="text-xl text-accent mb-4">Réservation Confirmée !</p>
          <p className="text-sm text-text-muted mb-6">
            Un e-mail de confirmation t'a été envoyé à <span className="text-text-main font-semibold">{email}</span>.
          </p>
          <button
            onClick={() => { setSuccess(false); setEmail(''); setDate(''); }}
            className="min-h-[44px] px-6 py-2 bg-primary text-white rounded-lg font-semibold cursor-pointer"
          >
            Nouvelle réservation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-bg-card p-6 rounded-xl border border-gray-800 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-text-muted">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="exemple@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full min-h-[44px] px-4 py-2 bg-bg-main border border-gray-700 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-medium mb-1 text-text-muted">
              Choisir le cours
            </label>
            <select
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full min-h-[44px] px-4 py-2 bg-bg-main border border-gray-700 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Les Bases du Speedrun : Hollow Knight Any%">Hollow Knight Any%</option>
              <option value="Maîtriser les Mouvements Avancés dans Celeste">Celeste Mouvements Avancés</option>
              <option value="Elden Ring No Hit : Préparation">Elden Ring No Hit</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1 text-text-muted">
              Date souhaitée
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full min-h-[44px] px-4 py-2 bg-bg-main border border-gray-700 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}

          <button
            type="submit"
            className="mt-4 min-h-[44px] w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition cursor-pointer"
          >
            Confirmer la Réservation
          </button>
        </form>
      )}
    </section>
  );
}