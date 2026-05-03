'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoLink = `mailto:nicolasborrelli16@gmail.com?subject=Contact SmartAbos&body=Nom: ${encodeURIComponent(
    name
  )}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(
    message
  )}`;

  return (
    <main className="min-h-screen bg-[#F8F8FC] px-6 py-12 text-[#101633]">
      
      {/* Bouton retour */}
      <div className="mx-auto mb-6 max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#101633] shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
        >
          <ArrowLeft size={16} />
          Retour à l’accueil
        </Link>
      </div>

      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-black">Contact</h1>

        <p className="mt-3 text-slate-600">
          Une question ou un retour sur SmartAbos ? Envoyez-nous un message.
        </p>

        <div className="mt-8 space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Votre email"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message"
            rows={6}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          />

          <a
            href={mailtoLink}
            className="block w-full rounded-2xl bg-[#5B4DF0] px-6 py-4 text-center font-black text-white shadow-lg shadow-indigo-200 hover:opacity-90"
          >
            Envoyer un email
          </a>
        </div>
      </div>
    </main>
  );
}