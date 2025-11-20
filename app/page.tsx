import Image from 'next/image';
import Link from 'next/link';
import packageJson from '../package.json';

export default function HomePage() {
  const siteVersion = packageJson.version;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-lg">
        <Link href="/" className="mx-auto block w-80 sm:w-96">
          <Image
            src="/images/CC-Mainlogo.png"
            alt="ClenicaCare"
            width={512}
            height={512}
            priority
            className="h-auto w-full animate-pulse-slow transition hover:scale-[1.01]"
          />
        </Link>
        <p className="mt-8 text-2xl font-semibold tracking-wide text-clBlue uppercase">
          Coming Soon
        </p>
        <p className="mt-4 text-base text-slate-600">
          We are carefully crafting a premium care experience. Leave your details on our contact
          page and we will reach out as soon as we are ready.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-clBlue px-8 py-3 text-white shadow-lg transition hover:bg-clNavy"
        >
          Contact ClenicaCare
        </Link>
        <div className="mt-10 text-xs text-slate-400">v{siteVersion}</div>
      </div>
    </main>
  );
}
