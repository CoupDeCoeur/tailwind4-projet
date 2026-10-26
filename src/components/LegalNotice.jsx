import React from 'react';

export default function LegalNotice({ onBack }) {
  return (
    <section className="p-6 max-w-3xl mx-auto min-h-screen bg-bg-main text-text-main animate-fade-in">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-6 min-h-[44px] px-4 py-2 bg-bg-card hover:bg-bg-card-hover border border-gray-800 rounded-lg text-text-muted transition flex items-center gap-2 cursor-pointer"
        >
          ← Retour à l'accueil
        </button>
      )}

      <h2 className="text-3xl font-bold mb-6 font-heading text-primary">
        Informations Légales & Contact
      </h2>

      <div className="bg-bg-card p-6 rounded-xl border border-gray-800 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-accent mb-2">Projet Académique</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Ce projet web et son dossier de conception ont été réalisés dans le cadre du cursus académique de l'école <strong className="text-text-main">ESGI</strong>.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <h3 className="text-lg font-semibold text-text-main mb-3">Étudiant & Développeur</h3>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><strong className="text-text-main">Nom & Prénom :</strong> Romain BERRY</li>
            <li><strong className="text-text-main">Classe :</strong> M1 ESGI IW (Ingénierie du Web)</li>
            <li><strong className="text-text-main">Établissement :</strong> ESGI Reims</li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <h3 className="text-lg font-semibold text-text-main mb-3">Code Source & Déploiement</h3>
          <p className="text-sm text-text-muted mb-4">
            L'intégralité du code source du projet GameAcademy est hébergée sur GitHub :
          </p>
          <a
            href="https://github.com/CoupDeCoeur/tailwind4-projet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition cursor-pointer"
          >
            <span>💻 Dépôt GitHub : tailwind4-projet</span>
            <span>↗</span>
          </a>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <h3 className="text-lg font-semibold text-text-main mb-2">Politique de Confidentialité</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Ce site est un prototype à visée éducative. Aucune donnée personnelle saisie dans les formulaires de démonstration n'est conservée ni transmise à des tiers.
          </p>
        </div>
      </div>
    </section>
  );
}