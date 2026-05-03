'use client';

import { useState } from 'react';

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
            className="block w-full rounded-2xl bg-[#5B4DF0] px-6 py-4 text-center font-black text-white"
          >
            Envoyer un email
          </a>
        </div>
      </div>
    </main>
  );
}