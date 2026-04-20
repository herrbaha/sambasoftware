export function SiteFooter() {
  return (
    <footer className="w-full bg-[#fdf9f5] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-primary">
              bubble_chart
            </span>
            <span className="font-headline text-xl font-bold text-[#393835]">
              Samba Software
            </span>
          </div>
          <p className="font-body text-sm leading-relaxed text-[#393835]/70">
            Crafting digital experiences with precision and soul. Your technical
            partner for web and automation.
          </p>
        </div>
        <div className="md:col-span-1">
          <h6 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest">
            Sitemap
          </h6>
          <ul className="space-y-4">
            <li>
              <a
                className="font-body text-sm text-[#393835]/70 transition-colors hover:text-primary"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-body text-sm text-[#393835]/70 transition-colors hover:text-primary"
                href="#"
              >
                Works
              </a>
            </li>
            <li>
              <a
                className="font-body text-sm text-[#393835]/70 transition-colors hover:text-primary"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-body text-sm text-[#393835]/70 transition-colors hover:text-primary"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h6 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest">
            Connect
          </h6>
          <ul className="space-y-4">
            <li>
              <a
                className="font-body text-sm text-[#393835]/70 transition-colors hover:text-primary"
                href="#"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="font-body text-sm text-[#393835]/70 transition-colors hover:text-primary"
                href="#"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="font-body text-sm text-[#393835]/70 transition-colors hover:text-primary"
                href="#"
              >
                X (Twitter)
              </a>
            </li>
            <li>
              <a
                className="font-body text-sm text-[#393835]/70 transition-colors hover:text-primary"
                href="#"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h6 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest">
            Legal
          </h6>
          <p className="mb-4 font-body text-sm leading-relaxed text-[#393835]/70">
            © {new Date().getFullYear()} Samba Software. Built with soul.
          </p>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest">
              <span className="material-symbols-outlined text-sm">privacy_tip</span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest">
              <span className="material-symbols-outlined text-sm">description</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
