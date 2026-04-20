import Link from "next/link";

type NavPage = "home" | "about";

type SiteHeaderProps = {
  activePage?: NavPage;
};

function navClass(isActive: boolean) {
  return isActive
    ? "font-headline border-b-2 border-primary pb-1 text-lg font-semibold text-primary"
    : "font-headline text-lg text-on-surface-variant transition-colors hover:text-primary";
}

export function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  return (
    <header className="w-full bg-surface-variant">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="material-symbols-outlined text-2xl text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            bubble_chart
          </span>
          <span className="font-headline text-2xl font-black tracking-tight text-on-surface">
            Samba Software
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link href="/" className={navClass(activePage === "home")}>
            Home
          </Link>
          <a
            className="font-headline text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            href="#"
          >
            Works
          </a>
          <Link href="/about" className={navClass(activePage === "about")}>
            About
          </Link>
          <a
            className="font-headline text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            href="#"
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
