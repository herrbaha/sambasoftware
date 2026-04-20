import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Works | Samba Software",
};

const projects = [
  {
    name: "Greenstep Cooling Towers",
    category: ["Web", "Industrial"],
    result: "B2B lead generation + technical trust",
    metric: "4 core product lines organized",
    description:
      "Corporate web experience for cooling-tower manufacturing, product catalog visibility, and service discoverability.",
    href: "https://www.greenstepcoolingtowers.com/",
    screenshot: "/works/greenstep.png",
  },
  {
    name: "The Empower",
    category: ["Platform", "Social Impact"],
    result: "Guided journeys for newcomers",
    metric: "Multi-journey onboarding structure",
    description:
      "Information architecture and content navigation for migrant support, jobs, healthcare, and settlement guidance.",
    href: "https://theempower.org/",
    screenshot: "/works/theempower.png",
  },
  {
    name: "ElisaBelle Beauty",
    category: ["Shopify", "Commerce"],
    result: "Merchandising-ready storefront",
    metric: "Collection-first shopping flow",
    description:
      "Shopify storefront implementation with a clean catalog flow, promotional sections, and conversion-oriented product surfaces.",
    href: "https://elisabelle-beauty.myshopify.com/",
    screenshot: "/works/elisabelle.png",
  },
];

export default function WorksPage() {
  return (
    <>
      <SiteHeader activePage="works" />

      <main className="pb-24 pt-24">
        <section className="mx-auto mb-20 max-w-7xl px-8">
          <div className="max-w-3xl">
            <h1 className="mb-8 font-headline text-6xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
              Selected Work
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-on-surface-variant md:text-2xl">
              We engineer measurable outcomes through thoughtful product design,
              scalable architecture, and editorial-grade implementation.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-primary px-6 py-2 font-medium text-on-primary">
                All
              </span>
              <span className="rounded-full bg-surface-container-highest px-6 py-2 text-on-surface">
                Web
              </span>
              <span className="rounded-full bg-surface-container-highest px-6 py-2 text-on-surface">
                Shopify
              </span>
              <span className="rounded-full bg-surface-container-highest px-6 py-2 text-on-surface">
                Automation
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-4xl border border-outline-variant/20 bg-surface-container-low shadow-[0_20px_60px_rgba(57,56,53,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(57,56,53,0.12)]"
              >
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                  <div className="p-8 md:p-12 lg:col-span-5">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.category.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-secondary-container px-4 py-1.5 text-sm font-semibold text-on-secondary-container"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <h2 className="mb-5 font-headline text-3xl font-bold md:text-4xl">
                      {project.name}
                    </h2>
                    <p className="mb-6 leading-relaxed text-on-surface-variant">
                      {project.description}
                    </p>
                    <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-primary">
                      {project.result}
                    </p>
                    <div className="mb-8 inline-flex rounded-full border border-outline-variant/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface">
                      {project.metric}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-on-surface px-6 py-3 font-bold text-surface transition-colors hover:bg-primary"
                    >
                      Visit Live Site
                      <span className="material-symbols-outlined text-base">north_east</span>
                    </a>
                  </div>
                  <div className="relative min-h-[320px] bg-linear-to-br from-surface-container-high to-surface-container-lowest p-5 lg:col-span-7 lg:min-h-[420px] lg:p-8">
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative h-full overflow-hidden rounded-3xl border border-outline-variant/25 bg-white shadow-2xl">
                      <Image
                        src={project.screenshot}
                        alt={`${project.name} website screenshot`}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-surface-container-high p-12 text-center md:p-20">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-8 font-headline text-4xl font-extrabold md:text-5xl">
                Ready to be our next success story?
              </h2>
              <p className="mb-12 text-lg text-on-surface-variant">
                Let us design and build a digital system that improves velocity,
                quality, and business outcomes.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-xl bg-primary px-8 py-4 text-lg font-bold text-on-primary transition-all hover:scale-[1.02]"
                >
                  Work with us
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl border border-outline-variant/20 bg-white px-8 py-4 text-lg font-bold text-on-surface transition-all hover:bg-surface-container-low"
                >
                  Learn about us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter activePage="works" />
    </>
  );
}
