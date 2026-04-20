import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact | Samba Software",
};

const studioImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA62iiYSGcgdUO8kmWpUIkFi88wIW3stjQc-EH8BvGFuKWpfMfUJQHA7AG8lZeSWc0S9eqWcK0irSRImELjILwjo-gyQn7GLyoe_Vt39wDqInPZPXEJaaqAUjWxN5U0ezqlyuM8yr_Fok4mpbIa9ULzJtmz0jPxwP4V3fZZtl2KuSkOutPg9mN2eAkKHC61mcmT15rySXELjWuHnpwnluKcP5OSxylqEz4YfKw4A-0CtBQpSJ-3x_yVFSAofhgHVPQQGYGCydQdAaN3";

export default function ContactPage() {
  return (
    <>
      <SiteHeader activePage="contact" />

      <main className="pt-24">
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="max-w-3xl">
            <h1 className="mb-8 font-headline text-6xl font-extrabold leading-[1.1] tracking-tight text-on-surface md:text-7xl">
              Let&apos;s craft your <span className="text-primary italic">next chapter.</span>
            </h1>
            <p className="text-lg font-medium leading-relaxed text-on-surface-variant md:text-xl">
              Whether you are scaling a startup or reimagining an enterprise, we are
              here to help. Our team typically responds within{" "}
              <span className="font-bold text-secondary">4 business hours</span>.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-32 grid max-w-7xl grid-cols-1 gap-8 px-8 lg:grid-cols-12">
          <div className="rounded-xl bg-surface-container-low p-8 md:p-12 lg:col-span-8">
            <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <label className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                  Full Name
                </label>
                <input
                  className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-shadow focus:ring-2 focus:ring-primary/40"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                  Email Address
                </label>
                <input
                  className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-shadow focus:ring-2 focus:ring-primary/40"
                  placeholder="john@company.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                  Company Name
                </label>
                <input
                  className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-shadow focus:ring-2 focus:ring-primary/40"
                  placeholder="Acme Inc."
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                  Project Type
                </label>
                <select className="w-full appearance-none rounded-lg border-none bg-surface-container-lowest p-4 transition-shadow focus:ring-2 focus:ring-primary/40">
                  <option>Product Design</option>
                  <option>Full-stack Development</option>
                  <option>Branding &amp; Identity</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                  Budget Range
                </label>
                <select className="w-full appearance-none rounded-lg border-none bg-surface-container-lowest p-4 transition-shadow focus:ring-2 focus:ring-primary/40">
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                  Your Message
                </label>
                <textarea
                  className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-shadow focus:ring-2 focus:ring-primary/40"
                  placeholder="Tell us about your goals..."
                  rows={5}
                />
              </div>
              <div className="pt-4 md:col-span-2">
                <button
                  className="rounded-lg bg-gradient-to-br from-primary to-primary-container px-10 py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
                  type="submit"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-4">
            <div className="flex flex-col items-center rounded-xl bg-surface-container p-8 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/20">
                <span className="material-symbols-outlined text-3xl text-primary">
                  event_available
                </span>
              </div>
              <h3 className="mb-3 font-headline text-2xl font-bold">Prefer a call?</h3>
              <p className="mb-8 text-sm leading-relaxed text-on-surface-variant">
                Skip the back-and-forth and book a 15-minute discovery session
                directly.
              </p>
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-on-surface py-4 font-bold text-surface transition-colors hover:bg-on-surface/90"
                type="button"
              >
                Schedule Meeting
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-primary p-8 text-white">
              <div className="relative z-10">
                <h3 className="mb-2 font-headline text-2xl font-bold">Direct Channel</h3>
                <p className="mb-6 text-sm font-medium text-primary-container">
                  For urgent technical matters
                </p>
                <a
                  className="text-xl font-bold underline decoration-primary-container underline-offset-8 transition-colors hover:text-primary-container"
                  href="mailto:hello@sambasoftware.io"
                >
                  hello@sambasoftware.io
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20 transition-transform duration-700 group-hover:scale-110">
                <span className="material-symbols-outlined text-[180px]">
                  alternate_email
                </span>
              </div>
            </div>

            <div className="min-h-[200px] flex-grow overflow-hidden rounded-xl">
              <Image
                src={studioImage}
                alt="Modern minimalist design studio"
                width={900}
                height={700}
                className="h-full w-full object-cover grayscale opacity-80 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32">
          <div className="mx-auto max-w-7xl px-8">
            <div className="flex flex-col gap-16 md:flex-row">
              <div className="md:w-1/3">
                <h2 className="mb-6 font-headline text-4xl font-extrabold tracking-tight">
                  Frequently asked
                </h2>
                <p className="text-on-surface-variant">
                  Common questions about starting a partnership with Samba Software.
                </p>
              </div>
              <div className="space-y-4 md:w-2/3">
                {[
                  {
                    q: "What is your typical project timeline?",
                    a: "Most MVP builds take between 8 to 12 weeks. Strategic design phases usually span 3 to 4 weeks depending on the complexity and depth of user research required.",
                  },
                  {
                    q: "Do you provide post-launch support?",
                    a: "Absolutely. We offer maintenance retainers and dedicated growth squads to help you iterate based on real user feedback after your initial release.",
                  },
                  {
                    q: "What do you require from clients to start?",
                    a: "A clear vision of your problem space is essential. We work together during discovery to formalize technical requirements and success metrics.",
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    className="group cursor-pointer rounded-xl bg-surface-container-lowest p-6"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-headline text-lg font-bold">{item.q}</h4>
                      <span className="material-symbols-outlined text-primary transition-transform group-hover:rotate-180">
                        expand_more
                      </span>
                    </div>
                    <p className="leading-relaxed text-on-surface-variant">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter activePage="contact" />
    </>
  );
}
