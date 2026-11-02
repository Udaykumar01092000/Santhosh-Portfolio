"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { TypingRoles } from "@/components/TypingRoles";
import { LanyardCard } from "@/components/idCard";
import "@/styles/hero.css";

const ROLES = [
  "Data Analyst",
  "Business Analyst",
  "Power BI Developer",
  "Tableau Developer",
  "Excel Analyst",
  "Data Analyst",
  "SQL Developer",
  "Data Storyteller",
  "Dashboard Developer",
  //"Data Scientist",
  //"AI Engineer",
  //"Python Developer",
];

function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.25 1.84 1.25 1.08 1.84 2.82 1.3 3.5.99.11-.79.42-1.31.76-1.61-2.66-.31-5.47-1.35-5.47-6a4.68 4.68 0 0 1 1.23-3.25 4.36 4.36 0 0 1 .12-3.2s1-.33 3.3 1.24a11.3 11.3 0 0 1 6 0c2.29-1.57 3.29-1.24 3.29-1.24a4.36 4.36 0 0 1 .12 3.2 4.67 4.67 0 0 1 1.23 3.25c0 4.66-2.81 5.68-5.49 5.99.43.38.82 1.1.82 2.23v3.31c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z" />
    </svg>
  );
}

export function Hero() {
  const profileImageSrc = "/santhosh_profile1.png";

  return (
    <section className="relative flex min-h-[calc(100svh-6rem)] w-full items-center overflow-hidden bg-[var(--hero-section-background)] pt-10 pb-16 sm:min-h-[calc(100svh-7rem)] sm:pt-12 sm:pb-20 lg:min-h-screen lg:pt-0 lg:pb-0">
      
      <ParticlesBackground />

      {/* Purple glow */}
      <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#8750f7]/20 blur-[120px]" />

      {/* Background watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hero-watermark origin-center select-none"
        >
          HI
        </motion.span>
      </div>

      {/* Main Hero Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">

        {/* LEFT CONTENT (Takes 7 columns on large screens) */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative lg:col-span-7 lg:pl-[120px]"
        >
          {/* LANYARD ID CARD */}
          <LanyardCard
  name="Santhosh M"
  role="Data Analyst"
  status="Available for projects"
  photo="/santhosh_profile1.png"
  ropeLength={110}
  className="
  absolute
  left-[calc(100%-115px)]
  top-[-90px]
  z-[30]
  block
  origin-top-left
  scale-[0.60]
  sm:left-[calc(100%-130px)]
  sm:scale-[0.8]
  lg:left-[-95px]
  lg:top-[-110px]
  lg:scale-100
"
/>

          {/* NAME AND ROLE */}
          <h1 className="hero-title relative z-10 w-full">
            <span className="hero-title-line hero-title-name block">
              Santhosh Murarishetty
            </span>

            <span className="hero-title-line hero-title-subline block text-[var(--hero-kicker)] mt-2">
              I&apos;m a{" "}
              <span className="inline-block">
                <TypingRoles roles={ROLES} />
              </span>
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="relative z-10 mt-5 max-w-xl text-lg leading-8 text-[var(--hero-copy)] sm:mt-6 sm:text-xl sm:leading-9">
            I transform raw data into meaningful insights through data
            analysis, interactive dashboards, and compelling visualizations
            using{" "}
            <b style={{ color: "#8750f7" }}>Excel</b>,{" "}
            <b style={{ color: "#8750f7" }}>Power BI</b>,{" "}
            <b style={{ color: "#8750f7" }}>Tableau</b>, and{" "}
            <b style={{ color: "#8750f7" }}>SQL</b>, helping businesses
            make smarter, data-driven decisions.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-actions relative z-10 mt-7 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
            <a
              href="/Santhosh_Data_Analyst_CV.docx"
              className="download-cta group inline-flex items-center gap-3 rounded-full border border-[var(--hero-action-border)] bg-[var(--hero-action-background)] px-8 py-4 text-sm font-bold tracking-[0.12em] text-[#8750f7] shadow-[var(--hero-action-shadow)] transition-all duration-300 hover:bg-[#8750f7] hover:!text-white"
            >
              Download CV
              <Download size={17} className="download-icon" />
            </a>

            <div className="hero-social-row flex items-center gap-3">
              <a
                className="hero-social"
                href="#"
                aria-label="LinkedIn"
                target="_blank"
              >
                <LinkedinIcon size={17} />
                <span className="hero-tooltip">LinkedIn</span>
              </a>

              <a
                className="hero-social"
                href="#"
                aria-label="GitHub"
                target="_blank"
              >
                <GithubIcon size={17} />
                <span className="hero-tooltip">GitHub</span>
              </a>

              <a
                className="hero-social"
                href="mailto:santhoshsss2362@gmail.com"
                aria-label="Email"
              >
                <Mail size={17} />
                <span className="hero-tooltip">Email</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE (Takes 5 columns on large screens, making it cleanly separated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 4 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center lg:col-span-5 lg:justify-end z-20"
        >
          <div className="relative h-[360px] max-w-[330px] w-full overflow-hidden rounded-[32px] border-2 border-[var(--hero-frame)] bg-[var(--hero-card-background)] shadow-[0_30px_80px_rgba(135,80,247,0.25)] transition duration-500 hover:rotate-0 sm:h-[460px] sm:max-w-[400px]">
            <img
              src={profileImageSrc}
              alt="Santhosh Murarishetty"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}