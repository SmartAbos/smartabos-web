'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F8F8FC] px-6 py-12 text-[#101633]">
      
      {/* Bouton retour */}
      <div className="mx-auto mb-6 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#101633] shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
        >
          <ArrowLeft size={16} />
          Retour à l’accueil
        </Link>
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-black">Politique de confidentialité</h1>

        <p className="mt-4 text-slate-600">
          SmartAbos est une application permettant de gérer ses abonnements et contrats.
        </p>

        <h2 className="mt-8 text-xl font-black">Données collectées</h2>
        <p className="mt-2 text-slate-600">
          SmartAbos ne collecte aucune donnée personnelle. Les informations saisies
          restent stockées localement sur l’appareil de l’utilisateur.
        </p>

        <h2 className="mt-8 text-xl font-black">Utilisation</h2>
        <p className="mt-2 text-slate-600">
          Les données servent uniquement à afficher les dépenses mensuelles,
          classer les abonnements et proposer des alternatives moins chères.
        </p>

        <h2 className="mt-8 text-xl font-black">Partage</h2>
        <p className="mt-2 text-slate-600">
          Aucune donnée n’est vendue ou partagée avec des tiers.
        </p>

        <h2 className="mt-8 text-xl font-black">Contact</h2>
        <p className="mt-2 text-slate-600">
          Pour toute question :{' '}
          <a
            href="mailto:contact@smartabos.com"
            className="font-semibold text-[#5B4DF0] hover:underline"
          >
            contact@smartabos.com
          </a>
        </p>
      </div>
    </main>
  );
}