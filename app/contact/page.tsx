import { ContactForm } from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact ClenicaCare'
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--clenicacare-bg)] px-4 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row">
        <section className="flex-1 text-center lg:text-left">
          <Link href="/" className="mx-auto block w-64 sm:w-80 lg:mx-0">
            <Image
              src="/images/CC-Mainlogo.png"
              alt="ClenicaCare"
              width={320}
              height={320}
              className="mx-auto transition hover:scale-[1.01] lg:mx-0"
            />
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-clBlue">ClenicaCare</p>
          <h1 className="mt-2 text-4xl font-bold text-clNavy">Contact ClenicaCare</h1>
          <p className="mt-4 text-base text-slate-600">
            Please share a few details about yourself and how we can help. We respond to every
            message within one working day and treat your personal information with care.
          </p>
        </section>
        <section className="flex-1 w-full">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
