import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-content max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-4">
          404
        </p>
        <h1>Diese Seite gibt es leider nicht.</h1>
        <p className="mt-6 text-[var(--muted)]">
          Vielleicht ist Ihr Link veraltet — schauen Sie gern auf der
          Startseite vorbei.
        </p>
        <p className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white"
          >
            Zur Startseite
          </Link>
        </p>
      </div>
    </section>
  );
}
