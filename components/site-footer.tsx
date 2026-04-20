import Link from "next/link";

type NavPage = "home" | "works" | "about" | "contact";

type SiteFooterProps = {
  activePage?: NavPage;
};

function sitemapClass(isActive: boolean) {
  return isActive
    ? "font-body text-sm font-medium text-primary"
    : "font-body text-sm text-on-surface-variant/70 transition-colors hover:text-primary";
}

export function SiteFooter({ activePage = "home" }: SiteFooterProps) {
  return (
    <footer className="w-full bg-surface-variant py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary">bubble_chart</span>
            <span className="font-headline text-xl font-bold text-on-surface">
              Samba Software
            </span>
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant/70">
            A boutique software studio crafting digital experiences with technical
            precision and human soul.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div>
            <h5 className="mb-6 font-headline text-xs font-black uppercase tracking-widest text-on-surface">
              Studio
            </h5>
            <ul className="space-y-4 font-body text-sm">
              <li>
                <Link className={sitemapClass(activePage === "home")} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={sitemapClass(activePage === "works")} href="/works">
                  Works
                </Link>
              </li>
              <li>
                <Link className={sitemapClass(activePage === "about")} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={sitemapClass(activePage === "contact")} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-6 font-headline text-xs font-black uppercase tracking-widest text-on-surface">
              Connect
            </h5>
            <ul className="space-y-4 font-body text-sm">
              <li><a className={sitemapClass(false)} href="#">LinkedIn</a></li>
              <li><a className={sitemapClass(false)} href="#">GitHub</a></li>
              <li><a className={sitemapClass(false)} href="#">X</a></li>
              <li><a className={sitemapClass(false)} href="#">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between md:col-span-1">
          <div className="rounded-2xl bg-surface-container-highest p-6">
            <p className="mb-4 text-xs font-bold tracking-tight text-on-surface-variant">
              STAY IN THE LOOP
            </p>
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-lg border-0 bg-white text-xs focus:ring-2 focus:ring-primary/40 p-1"
                placeholder="Email"
                type="text"
              />
              <button type="button" className="rounded-lg bg-primary p-2 text-on-primary">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
          <p className="mt-8 text-[10px] text-on-surface-variant/50">
            © {new Date().getFullYear()} Samba Software. Built with soul.
          </p>
        </div>
      </div>
    </footer>
  );
}
