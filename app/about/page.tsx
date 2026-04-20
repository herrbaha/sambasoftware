import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Us | Samba Software",
};

const storyImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCkP8BOY6SRHB-f7-fgNY8M2wsiu1H_FUoSSV-1lUpgv65U0Gb6Y0FAl3NWcY-ZWAAGUL1uzR0K6Pkt3yNzuIP8YapUGqyuSLNSc7ksQhGeFkfi0cRXHETmxvpX9pnXjZ2XpRpO6F2WwFMulrgMyN4Wa_56aiZIvmqO_PEhzYdfEC796_ppCwK0w-Jg8DS51oov3zpx8Y5WuspgftOQ3I3gNWRvRRZEnQZORpLsty_9GNRD4oQO_2c2oXM1gxRQJAA88n73kRFeo-jn";

const teamImages = [
  {
    name: "Muhsin Altintop",
    role: "Lead Architect",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9z6N8yrx4o69n_TDBvwjqrlU-OF6rYZbzK4zpPKJplz8jxg4t8upJ_IdjLuSnSYsSfvA-HKggoa5CCJx7d48LgoLIsLAhlwLXJz_TawjVuo9G2GzsXAZgc76wNsVL1ShMSoykRIGaUoK8bdSIBm1QUR91-Sx0Po8-HszzsasOXHSATbCZwCq-r0aeWFHReVCZmrMvId-3bRbjELoWdQsht8UM63W-QLsETu9k--rk2nS948TM7DW_ak6Ou7eVe1auKU1CLLQaigcF",
    bullets: [
      "Cloud Native Infrastructure",
      "Rust & System Performance",
      "Security First Thinking",
    ],
  },
  {
    name: "Saliha Oguzoglu",
    role: "Experience Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGreqFZ4KzgpvN1bkhAz3_Oxk0115_n7ohAJyKVGK3rh0k0TKRPdgJTqOMkj4-MR0NNO1IaUzGjJIeyQzU_r2edleaz_DcwjFAV8LzuM0GVXwJdKSBVzPw_QwiAHEXdy5m786TTjQuT47aScRohO2fuw6bc6JOOELwKqobSbVl5pHvYHcVUl5Wrsw_FP8M92oV0iwNieuCZ9iCXuvsMlsW_5in-Jqw5UWX0J0LOlZEGBswSiWdr1-IUr_wJo_delI2bsbTJGmOPcVh",
    bullets: [
      "Human-Centered Interface Design",
      "Design System Strategy",
      "Accessibility & Inclusion",
    ],
  },
  {
    name: "Bahadir Inanc",
    role: "Product Strategy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6E7odqpQfuH0r7oghcKpuVDePiS-gd1lngRxp59B2kLIgsSxzyXoKsDNUueQSGQ2_TMztI9pRqFsFZitpkXagryjLXPyrQlifrBYbhB26RIudHFR0TVImvmr8w2rOLP0ADlRVfQCAHJXjzLoutCi_l8W9fJzYsIr6-H8oVfZrqsLuXFiB4M2oezna4ULlSX5pHt5OrH9QePIeLDuRqxeWAA_2kpWaVjOdO1LkEz7zgmAsj2wsBeG7KPldzopctKkOO1_JLk9K1o2o",
    bullets: [
      "Lean Startup Methodologies",
      "Data-Driven Decision Making",
      "Agile Transformation",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader activePage="about" />
      <main className="pt-32">
        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-8 inline-block rounded-full bg-secondary-container px-4 py-1.5 font-headline text-xs font-bold tracking-wider text-on-secondary-container">
                OUR STORY
              </span>
              <h1 className="mb-10 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-on-surface md:text-7xl">
                Three minds. <br />
                <span className="text-primary">One shared soul</span> for craft.
              </h1>
              <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-on-surface-variant">
                <p>
                  Samba Software was not born in a boardroom. It began as a
                  late-night conversation between three friends who were tired
                  of the feature factory model of software development.
                </p>
                <p>
                  We realized that the best products are not built through rigid
                  hierarchy, but through intense collaboration and mutual
                  respect. We decided to strip away the noise and build a studio
                  where technical craft and human connection sit at the same
                  table.
                </p>
                <p>
                  Today, we operate as a nimble trio, treating every line of
                  code as an act of editorial care. We do not just ship
                  software; we build digital legacies for brands that value
                  substance over hype.
                </p>
              </div>
            </div>
            <div className="relative mt-12 lg:col-span-5 lg:mt-0">
              <div className="editorial-shadow relative aspect-[4/5] rotate-2 overflow-hidden rounded-[2rem] bg-surface-container-high">
                <Image
                  src={storyImage}
                  alt="The founders collaborating in a bright sunlit studio"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-primary-container opacity-20" />
            </div>
          </div>
        </section>

        <section className="mb-32 bg-surface-variant py-32">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
                The DNA of our <br />
                craftsmanship.
              </h2>
              <p className="max-w-md text-lg italic text-on-surface-variant">
                We believe that great software is a byproduct of great
                principles.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: "architecture",
                  title: "Pragmatism",
                  color: "bg-secondary-container text-on-secondary-container",
                  text: "We do not chase shiny objects. We build robust, scalable solutions that solve real problems without over-engineering the simple stuff.",
                },
                {
                  icon: "visibility",
                  title: "Transparency",
                  color: "bg-primary-container/20 text-primary",
                  text: "No black boxes. You are invited into our Slack, our Trello, and our thinking. We share the wins and the hurdles in real-time.",
                },
                {
                  icon: "auto_fix_high",
                  title: "Craftsmanship",
                  color: "bg-tertiary-container/20 text-tertiary",
                  text: "We treat code like literature. Every component is polished, accessible, and performant. If it is worth doing, it is worth doing beautifully.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="editorial-shadow group rounded-[2rem] bg-surface-container-lowest p-10 transition-transform duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="mb-4 font-headline text-2xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div className="mb-20 text-center">
            <span className="mb-4 block font-headline text-xs font-bold uppercase tracking-widest text-primary">
              THE ARCHITECTS
            </span>
            <h2 className="font-headline text-4xl font-extrabold text-on-surface md:text-5xl">
              Meet the trio.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {teamImages.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="editorial-shadow group mb-8 w-full aspect-square overflow-hidden rounded-[3rem] bg-surface-container">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="mb-1 font-headline text-2xl font-bold text-on-surface">
                  {member.name}
                </h4>
                <p className="mb-6 font-semibold text-primary">{member.role}</p>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  {member.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center justify-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-on-surface p-12 text-surface md:p-20">
            <div className="absolute right-0 top-0 p-12 opacity-10">
              <span className="material-symbols-outlined text-[12rem]">speed</span>
            </div>
            <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 font-headline text-4xl font-extrabold leading-tight md:text-5xl">
                  How we dance <br />
                  together.
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      n: "01",
                      title: "Async-Friendly Flow",
                      text: "We value deep work. Our communication is asynchronous-first, ensuring code is written with focus while keeping you updated via clear documentation.",
                    },
                    {
                      n: "02",
                      title: "Weekly Demos",
                      text: "No waiting until the end of the month. Every Friday, we demo tangible progress, ensuring our direction aligns perfectly with your vision.",
                    },
                    {
                      n: "03",
                      title: "Clear Milestones",
                      text: "Projects are broken down into logical phases. You always know exactly where we are and what is landing next.",
                    },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface/20 text-lg font-bold">
                        {step.n}
                      </div>
                      <div>
                        <h4 className="mb-2 font-headline text-xl font-bold">{step.title}</h4>
                        <p className="text-surface-variant/80">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden rounded-[2rem] border border-surface/10 bg-surface-container-low/10 p-8 backdrop-blur-sm lg:block">
                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded-full bg-surface/20" />
                  <div className="h-4 w-1/2 rounded-full bg-surface/10" />
                  <div className="space-y-4 pt-8">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold uppercase tracking-widest opacity-60">
                        Sprint Status
                      </span>
                      <span className="rounded-full bg-primary-container px-3 py-1 text-[10px] font-black tracking-tighter text-on-primary-container">
                        LIVE
                      </span>
                    </div>
                    <div className="relative h-24 overflow-hidden rounded-xl bg-primary">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-on-primary">
                          monitoring
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-8 py-32 text-center">
          <h2 className="mb-8 font-headline text-3xl font-bold md:text-4xl">
            Ready to build something soulful?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-on-surface-variant">
            We are currently taking on new projects starting in Q3. Let us talk
            about what you are building.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="editorial-shadow rounded-full bg-on-surface px-10 py-4 font-headline font-bold text-surface transition-all hover:bg-primary"
            >
              View our works
            </Link>
            <Link
              href="#"
              className="rounded-full border-2 border-outline-variant/30 px-10 py-4 font-headline font-bold text-on-surface transition-all hover:border-primary"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter activePage="about" />
    </>
  );
}
