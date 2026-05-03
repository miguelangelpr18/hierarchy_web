import Link from "next/link";

// logo-primary: wordmark horizontal con subrayado lime
export function LogoPrimary({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Hierarchy Web Agency — Inicio"
      className={`inline-flex items-center ${className}`}
    >
      <svg
        viewBox="0 0 380 90"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="hierarchy"
        className="h-8 w-auto"
        fill="none"
      >
        <text
          x="0"
          y="65"
          fontFamily="var(--font-geist-sans), Geist, -apple-system, system-ui, sans-serif"
          fontSize="60"
          fontWeight="700"
          fill="#0F0F12"
          letterSpacing="-2.7"
        >
          hierarchy
        </text>
        <rect x="0" y="73" width="346" height="9" fill="#C4F542" />
      </svg>
    </Link>
  );
}

// logo-tagline: wordmark + "WEB AGENCY · MX" — usado en footer
export function LogoTagline({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Hierarchy Web Agency — Inicio"
      className={`inline-flex items-center ${className}`}
    >
      <svg
        viewBox="0 0 380 130"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="hierarchy web agency"
        className="h-12 w-auto"
        fill="none"
      >
        <text
          x="0"
          y="65"
          fontFamily="var(--font-geist-sans), Geist, -apple-system, system-ui, sans-serif"
          fontSize="60"
          fontWeight="700"
          fill="#0F0F12"
          letterSpacing="-2.7"
        >
          hierarchy
        </text>
        <rect x="0" y="73" width="346" height="9" fill="#C4F542" />
        <text
          x="0"
          y="115"
          fontFamily="var(--font-geist-sans), Geist, -apple-system, system-ui, sans-serif"
          fontSize="20"
          fontWeight="500"
          fill="#64748B"
          letterSpacing="0.05em"
        >
          WEB AGENCY · MX
        </text>
      </svg>
    </Link>
  );
}

// Alias default: Navbar usa LogoPrimary
export { LogoPrimary as Logo };
