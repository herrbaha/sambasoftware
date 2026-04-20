import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#fffbff]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">
            bubble_chart
          </span>
          <span className="font-headline text-2xl font-black tracking-tight text-[#393835]">
            Samba Software
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-headline border-b-2 border-primary pb-1 text-lg font-semibold text-primary"
          >
            Home
          </Link>
          <a
            className="font-headline text-lg text-[#393835] transition-colors hover:text-primary"
            href="#"
          >
            Works
          </a>
          <a
            className="font-headline text-lg text-[#393835] transition-colors hover:text-primary"
            href="#"
          >
            About
          </a>
          <a
            className="font-headline text-lg text-[#393835] transition-colors hover:text-primary"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
