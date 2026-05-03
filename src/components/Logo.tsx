import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Hierarchy Web Agency — Inicio"
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <span
        aria-hidden="true"
        className="grid h-7 w-7 place-items-center rounded-md bg-ink-800 text-bone-50 transition-colors group-hover:bg-lime-500 group-hover:text-ink-800"
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
          <rect x="2" y="2" width="12" height="2.5" rx="0.5" />
          <rect x="2" y="6.75" width="8" height="2.5" rx="0.5" />
          <rect x="2" y="11.5" width="5" height="2.5" rx="0.5" />
        </svg>
      </span>
      <span className="font-semibold tracking-tightest text-ink-800">Hierarchy</span>
    </Link>
  );
}
