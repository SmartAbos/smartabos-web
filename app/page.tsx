'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  WalletCards,
  Bell,
  TrendingDown,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';

export default function SmartAbosLandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FC] text-[#101633]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="SmartAbos" className="h-12 w-12 rounded-2xl" />
          <div>
            <p className="text-xl font-black leading-none">SmartAbos</p>
            <p className="text-xs text-slate-500">Vos dépenses sous contrôle</p>
          </div>
        </div>

        <a
          href="#telecharger"
          className="rounded-full bg-[#5B4DF0] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200"
        >
          Tester l’application
        </a>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#5B4DF0] shadow-sm">
              <ShieldCheck size={18} /> Données stockées localement
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Gérez vos abonnements.{' '}
              <span className="text-[#5B4DF0]">Trouvez moins cher.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              SmartAbos vous aide à centraliser vos contrats et abonnements,
              suivre vos dépenses mensuelles et identifier des alternatives
              moins chères.
            </p>

            <div id="telecharger" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#101633] px-6 py-4 font-bold text-white shadow-xl shadow-slate-300"
              >
                <Smartphone size={20} /> Télécharger sur Android
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-[#101633] shadow-sm"
              >
                <Smartphone size={20} /> Télécharger sur iOS
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Android en test fermé. iOS prochainement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-indigo-200 via-purple-100 to-transparent blur-2xl" />

            <div className="relative mx-auto max-w-sm rounded-[2.5rem] border-8 border-[#111827] bg-white p-4 shadow-2xl">
              <div className="mb-5 flex items-center gap-3">
                <img src="/logo.png" alt="SmartAbos" className="h-10 w-10 rounded-xl" />
                <div>
                  <p className="font-black">SmartAbos</p>
                  <p className="text-xs text-slate-500">Aperçu mensuel</p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#12113A] p-5 text-white">
                <p className="font-bold text-white/90">Dépenses mensuelles</p>
                <p className="mt-2 text-4xl font-black">171,99 €</p>
                <p className="mt-3 font-bold text-emerald-400">-35,99 € / mois</p>
                <div className="mt-8 h-20 rounded-2xl bg-gradient-to-t from-[#6C5CE755] to-transparent" />
              </div>

              <div className="mt-5 rounded-3xl bg-slate-50 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-black">Par catégorie</p>
                  <p className="text-sm font-bold text-[#5B4DF0]">Voir tout</p>
                </div>

                {[
                  ['Énergie', '45 €'],
                  ['Streaming', '14,99 €'],
                  ['Assurance', '35 €'],
                ].map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between border-b border-slate-200 py-3 last:border-0"
                  >
                    <span className="font-bold">{name}</span>
                    <span className="font-black">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            <Feature
              icon={<WalletCards />}
              title="Centralisez"
              text="Ajoutez vos contrats et abonnements en quelques minutes."
            />
            <Feature
              icon={<TrendingDown />}
              title="Économisez"
              text="Découvrez des alternatives moins chères quand elles existent."
            />
            <Feature
              icon={<Bell />}
              title="Soyez informé"
              text="Visualisez les opportunités d’économies dans l’écran Alertes."
            />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Simple, transparent et utile au quotidien.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Pas de connexion bancaire. Pas de lecture d’e-mails. Vous gardez le
            contrôle sur les informations que vous saisissez.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Aucune connexion bancaire', 'Données locales', 'Suppression possible'].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white p-4 font-bold shadow-sm"
                >
                  <CheckCircle2 className="text-emerald-500" size={20} /> {item}
                </div>
              )
            )}
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 SmartAbos. Tous droits réservés.</p>

        <div className="flex gap-5">
          <a href="/privacy" className="hover:text-[#5B4DF0]">
            Politique de confidentialité
          </a>
          <a href="/contact" className="hover:text-[#5B4DF0]">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F1FF] text-[#5B4DF0]">
        {icon}
      </div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}