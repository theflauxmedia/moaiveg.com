import { ArrowRight, ExternalLink, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { pressReleases } from "@/lib/pressReleases";
import { premiumEase, staggerContainer, staggerItem } from "@/lib/motion";

const publicationNames = [
  ...new Set(pressReleases.flatMap((r) => r.outlets.map((o) => o.name))),
];

const PressReleases = () => {
  return (
    <section id="press" className="relative overflow-hidden bg-muted py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/70 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <Newspaper className="h-4 w-4 text-accent" aria-hidden />
            PR &amp; Media Coverage
          </div>
          <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl shimmer-text">
            In the Press
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            MOAI&apos;s story is reaching audiences across India&apos;s leading news
            platforms — from culinary innovation to redefining vegetarian fine dining
            in Bengaluru.
          </p>
        </Reveal>

        <motion.div
          className="mb-14 overflow-hidden rounded-2xl border border-border/60 bg-white/60 py-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: premiumEase }}
        >
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...publicationNames, ...publicationNames].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {name}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pressReleases.map((release) => (
            <motion.article
              key={release.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: premiumEase }}
              className="group gradient-card royal-border hover:royal-glow flex flex-col overflow-hidden rounded-2xl border border-border/50 transition-smooth hover:shadow-elegant"
            >
              <div className="border-b border-border/40 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 px-6 py-5 sm:px-8">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Press Release
                  </span>
                  <time dateTime="2026-04-01" className="text-sm text-muted-foreground">
                    {release.date}
                  </time>
                </div>
                <h3 className="text-xl font-bold leading-snug text-foreground transition-smooth group-hover:text-primary sm:text-2xl">
                  {release.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {release.excerpt}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-6 py-5 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Featured in
                </p>
                <div className="flex flex-wrap gap-2">
                  {release.outlets.map((outlet) => (
                    <motion.a
                      key={outlet.url}
                      href={outlet.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-smooth hover:border-accent/50 hover:bg-accent/10 hover:text-primary"
                      aria-label={`Read on ${outlet.name}`}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {outlet.name}
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-12 text-center" delay={0.15}>
          <motion.a
            href="/press"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 font-semibold text-primary shadow-sm transition-smooth hover:border-primary/40 hover:bg-primary hover:text-white hover:shadow-elegant"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Press Coverage
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
};

export default PressReleases;
