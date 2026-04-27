"use client";

import { motion, type Variants } from "framer-motion";
import { Calculator, FileSearch, Handshake, type LucideIcon } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const staggerIn: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

const subtleFadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4EFE7] text-[#17130F]">
      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="absolute left-0 right-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-6 md:py-7"
      >
        <div className="flex items-center gap-3">
          <div className="text-2xl font-semibold tracking-[0.16em] md:text-3xl md:tracking-[0.18em]">DILS</div>
          <div className="h-7 w-px bg-black/30 md:h-8" />
          <div className="text-[9px] font-semibold uppercase leading-3 tracking-[0.2em] md:text-[10px] md:tracking-[0.24em]">
            Outdoor<br />Holdings
          </div>
        </div>

        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
          <a href="#about" className="hover:text-[#B67A2C]">About</a>
          <a href="#criteria" className="hover:text-[#B67A2C]">Criteria</a>
          <a href="#process" className="hover:text-[#B67A2C]">Process</a>
          <a href="mailto:info@dilsoh.com" className="hover:text-[#B67A2C]">Contact</a>
        </div>

        <a
          href="mailto:info@dilsoh.com"
          className="rounded-full border border-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] md:hidden"
        >
          Contact
        </a>
      </motion.nav>

      {/* HERO */}
      <section className="relative min-h-[82vh] overflow-hidden md:min-h-screen">
        <motion.img
          src="/Hero_Sky_BG.jpg"
          alt=""
          initial={{ scale: 1.03, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE7]/96 via-[#F4EFE7]/74 to-[#F4EFE7]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4EFE7]/20 via-transparent to-[#F4EFE7]/40" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#F4EFE7]/85 to-[#F4EFE7] md:hidden" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 pt-20 md:min-h-screen md:px-6 md:pt-24">
          <motion.div
            variants={staggerIn}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.h1 variants={fadeUp} className="font-serif text-[3.25rem] leading-[1.12] tracking-[-0.035em] sm:text-6xl md:text-8xl md:leading-[1.08]">
              Building a focused
              <br className="hidden sm:block" />
              {" "}portfolio of digital
              <br className="hidden sm:block" />
              {" "}billboard assets.
            </motion.h1>
            <motion.div variants={fadeUp} className="mt-7 h-px w-20 bg-[#B67A2C] md:mt-9 md:w-24" />
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg font-medium leading-8 text-black/76 md:mt-7 md:text-xl md:leading-9">
              Dils Outdoor Holdings acquires and operates digital billboard assets with clear operational and revenue upside.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ACQUISITION CRITERIA */}
      <section id="criteria" className="relative overflow-hidden bg-black text-white">
        <img
          src="/traffic_Ariel.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/35" />

        <motion.div
          variants={staggerIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 mx-auto grid max-w-7xl gap-9 px-5 py-16 md:px-6 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89146]">Acquisition Criteria</p>
            <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.04em] md:text-6xl md:leading-[0.98]">
              Assets in strong, high-traffic markets.
            </h2>
            <div className="mt-7 h-px w-20 bg-[#C89146]" />
          </motion.div>

          <motion.div variants={staggerIn} className="max-w-xl space-y-3">
            {[
              "Digital billboard assets — single units or small portfolios",
              "Indiana and surrounding high-traffic corridors",
              "Stable permits, leases, and site control",
              "Documented traffic counts and clear visibility",
              "Existing revenue with identifiable upside",
              "Ownership transitions, underperformance, or non-core assets"
            ].map((item) => (
              <motion.div variants={fadeUp} key={item} className="flex gap-3 border-b border-white/14 pb-3 text-sm leading-6 text-white/88 md:text-base md:leading-7">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C89146] text-[10px] text-[#C89146]">✓</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#F4EFE7]">
        <motion.div
          variants={staggerIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-7xl gap-9 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B67A2C]">Process</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-5xl">Clear review. Direct communication. Serious intent.</h2>
          </motion.div>

          <motion.div variants={staggerIn} className="grid gap-4 md:grid-cols-3">
            <Step
              icon={FileSearch}
              title="Review"
              body="We assess location, traffic, permits, site control, and revenue history."
            />
            <Step
              icon={Calculator}
              title="Underwrite"
              body="We evaluate upside, pricing, occupancy, and advertiser demand."
            />
            <Step
              icon={Handshake}
              title="Close"
              body="When there is a fit, we move with a straightforward process."
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="border-y border-black/10 bg-white">
        <motion.div
          variants={staggerIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-7xl gap-9 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[0.85fr_1.7fr] lg:items-center"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B67A2C]">About Us</p>
            <h2 className="mb-5 font-serif text-4xl tracking-[-0.04em] md:text-5xl">Long-term outdoor media ownership.</h2>
            <p className="max-w-xl text-base leading-7 text-black/72 md:text-lg md:leading-8">
              Dils Outdoor Holdings acquires and operates high-quality digital billboard assets in strong markets. We focus on disciplined underwriting, operational improvement, and clear communication with sellers.
            </p>
          </motion.div>

          <motion.div variants={staggerIn} className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
            <Pillar number="01" title="Focused" body="Digital billboard assets with clear upside." />
            <Pillar number="02" title="Disciplined" body="Underwritten for long-term value." />
            <Pillar number="03" title="Partnered" body="Clear process and reliable execution." />
            <Pillar number="04" title="Operator Led" body="Active ownership with attention to detail." />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#11100E] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-16">
          <motion.div
            variants={staggerIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-5xl">Have an opportunity to discuss?</motion.h2>
            <motion.div variants={fadeUp} className="mt-6 h-px w-20 bg-[#C89146]" />
            <motion.p variants={fadeUp} className="mt-6 max-w-md text-base leading-7 text-white/70 md:text-lg md:leading-8">
              Interested in selling a digital billboard?
            </motion.p>
            <motion.a
              variants={subtleFadeUp}
              href="mailto:info@dilsoh.com"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="mt-6 inline-block w-full border border-[#C89146] px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C89146] hover:text-black sm:w-auto md:px-10"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F4EFE7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-black/45 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-3 text-black">
            <div className="text-2xl font-semibold tracking-[0.18em]">DILS</div>
            <div className="h-7 w-px bg-black/25" />
            <div className="text-[9px] font-semibold uppercase leading-3 tracking-[0.22em]">Outdoor<br />Holdings</div>
          </div>
          <p>© 2026 Dils Outdoor Holdings, LLC</p>
          <p>Built for long-term value.</p>
        </div>
      </footer>
    </main>
  );
}

function Pillar({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <motion.div variants={fadeUp} className="rounded-xl border border-black/10 bg-white/55 px-4 py-5 md:rounded-none md:border-y-0 md:border-r-0 md:border-l md:bg-transparent md:px-5 md:py-4">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[11px] font-semibold text-[#B67A2C] md:mb-6 md:h-11 md:w-11">
        {number}
      </div>
      <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] md:text-sm md:tracking-[0.18em]">{title}</h3>
      <p className="text-sm leading-6 text-black/62">{body}</p>
    </motion.div>
  );
}

function Step({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <motion.div variants={fadeUp} className="rounded-2xl border border-black/10 bg-white p-5 text-center md:p-6 md:text-left">
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#B67A2C]/35 bg-[#F4EFE7] text-[#B67A2C] md:mx-0 md:mb-5">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <h3 className="mb-2 text-lg font-semibold md:mb-3">{title}</h3>
      <p className="text-sm leading-6 text-black/62 md:text-base md:leading-7">{body}</p>
    </motion.div>
  );
}
