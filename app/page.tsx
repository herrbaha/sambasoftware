import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0-rAA4C6eX-0oTVlooKokW-6ZiM4sROeuilF7fBM57mqDEenrvONe72aX6V_zhCcTW8q68W_QUOo7oTsC0a0jXLKWKJX9x2mYQ9x7mhn0XQ2sNeZkauwhy2MrzkuejSgopCwmhEHq1ynE-LDm9Vl1b9SYAtTOGVQo4d0S8kbMClcVlfOyGBDzmS8ui51QZHXQ9b5MyFN2Lia_5MpOUghOJeYjzd03wWEiQJudV5wchrnqyxEQyUCyYvrk3_FUzvDNUrWu3I9P98U4";

const projectWideImage = "/works/greenstep.png";
const projectSquareImage = "/works/theempower.png";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 pb-32 pt-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="mb-8 font-headline text-6xl font-extrabold leading-[1.1] tracking-tight md:text-8xl">
              Building the <span className="italic text-primary">web</span> of
              tomorrow.
            </h1>
            <p className="mb-12 max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl">
              We are a friend-led trio of engineers and designers crafting
              premium web applications and intelligent automations for ambitious
              brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/works"
                className="rounded-xl bg-gradient-to-br from-primary to-primary-container px-10 py-5 font-headline text-lg font-bold text-on-primary shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                View work
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-surface-container-highest px-10 py-5 font-headline text-lg font-bold text-on-surface transition-transform hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative z-10 aspect-square overflow-hidden rounded-[3rem] bg-surface-container-high shadow-2xl">
              <Image
                src={heroImage}
                alt="Modern software workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-[2rem] bg-secondary-container opacity-50 blur-3xl" />
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-y border-outline-variant/10 bg-surface-variant py-12">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-8 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-16">
            {["Next.js", "React", "Node", "Cloud Architecture"].map((name) => (
              <div key={name} className="flex items-center gap-2">
                <span className="font-headline text-xl font-bold tracking-tighter">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* What we build */}
        <section className="mx-auto max-w-7xl px-8 py-32">
          <div className="mb-20">
            <h2 className="mb-6 font-headline text-5xl font-extrabold">
              What we build
            </h2>
            <div className="h-1 w-24 rounded-full bg-primary" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link
              href="/works?category=web"
              className="rounded-[2rem] bg-surface-container-low p-10 transition-colors duration-300 hover:bg-surface-container-high"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-container/20">
                <span className="material-symbols-outlined text-3xl text-primary">
                  desktop_windows
                </span>
              </div>
              <h3 className="mb-4 font-headline text-2xl font-bold">Web products</h3>
              <p className="leading-relaxed text-on-surface-variant">
                SaaS platforms, dashboards, and complex web applications built for
                scale and performance.
              </p>
            </Link>
            <Link
              href="/works?category=shopify"
              className="rounded-[2rem] bg-surface-container-low p-10 transition-colors duration-300 hover:bg-surface-container-high"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-container/20">
                <span className="material-symbols-outlined text-3xl text-secondary">
                  shopping_bag
                </span>
              </div>
              <h3 className="mb-4 font-headline text-2xl font-bold">E-commerce</h3>
              <p className="leading-relaxed text-on-surface-variant">
                Custom Shopify themes and headless commerce solutions that convert
                visitors into customers.
              </p>
            </Link>
            <Link
              href="/works?category=automation"
              className="rounded-[2rem] bg-surface-container-low p-10 transition-colors duration-300 hover:bg-surface-container-high"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-tertiary-container/20">
                <span className="material-symbols-outlined text-3xl text-tertiary">
                  bolt
                </span>
              </div>
              <h3 className="mb-4 font-headline text-2xl font-bold">Automation</h3>
              <p className="leading-relaxed text-on-surface-variant">
                Streamlining workflows through custom integrations and API-first
                architectures.
              </p>
            </Link>
          </div>
        </section>

        {/* Selected highlights */}
        <section className="bg-surface-container-lowest px-8 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div>
                <h2 className="mb-6 font-headline text-5xl font-extrabold">
                  Selected highlights
                </h2>
                <p className="max-w-xl text-lg text-on-surface-variant">
                  A collection of our recent work where design meets technical
                  excellence.
                </p>
              </div>
              <Link
                href="/works"
                className="group flex items-center gap-2 font-headline font-bold text-primary"
              >
                See all projects
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <Link href="/works" className="group cursor-pointer lg:col-span-8">
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-surface-container">
                  <Image
                    src={projectWideImage}
                    alt="Greenstep Cooling Towers Project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
                      Industrial
                    </span>
                    <h4 className="font-headline text-3xl font-bold">
                      Greenstep Cooling Towers
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-outline-variant transition-colors group-hover:text-primary">
                    north_east
                  </span>
                </div>
              </Link>
              <Link href="/works" className="group cursor-pointer lg:col-span-4">
                <div className="relative mb-6 aspect-square overflow-hidden rounded-[2.5rem] bg-surface-container">
                  <Image
                    src={projectSquareImage}
                    alt="The Empower Project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-secondary">
                      Social Impact
                    </span>
                    <h4 className="text-balance font-headline text-2xl font-bold">
                      The Empower
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-outline-variant transition-colors group-hover:text-secondary">
                    north_east
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="mx-auto max-w-7xl px-8 py-32">
          <div className="mb-24 text-center">
            <h2 className="mb-6 font-headline text-5xl font-extrabold">
              How we work
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-on-surface-variant">
              Simple, effective, and collaborative. We&apos;ve refined our process
              to deliver excellence at every stage.
            </p>
          </div>
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
            {[
              {
                n: "01",
                title: "Discovery",
                text: "Understanding your vision, business goals, and the problems we're here to solve.",
              },
              {
                n: "02",
                title: "Build",
                text: "Iterative development with clean code, modern stacks, and frequent feedback loops.",
              },
              {
                n: "03",
                title: "Launch",
                text: "Rigorous testing followed by a seamless deployment to your production environment.",
              },
              {
                n: "04",
                title: "Improve",
                text: "Ongoing support and data-driven optimizations to ensure long-term success.",
              },
            ].map((step) => (
              <div key={step.n} className="relative">
                <span className="absolute -left-4 -top-16 -z-10 font-headline text-9xl font-black text-surface-container-high">
                  {step.n}
                </span>
                <h5 className="mb-4 font-headline text-2xl font-bold">{step.title}</h5>
                <p className="leading-relaxed text-on-surface-variant">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 pb-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary to-secondary p-16 text-center text-on-primary md:p-32">
            <div className="relative z-10">
              <h2 className="mb-8 font-headline text-5xl font-extrabold md:text-7xl">
                Tell us about your idea
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90 md:text-2xl">
                Ready to build something remarkable? Let&apos;s talk about your next
                project.
              </p>
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-12 py-6 font-headline text-xl font-bold text-primary shadow-2xl transition-transform hover:scale-105"
              >
                Contact us
              </Link>
            </div>
            <div className="absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" />
            <div className="absolute -bottom-64 -left-64 h-[500px] w-[500px] rounded-full bg-secondary-container/20 blur-[100px]" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
