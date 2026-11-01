"use client";

import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { ScrollReveal, ScrollScale, ParallaxLayer } from "@/components/ScrollAnimations";

const education = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Technology",
    course:"Branch : Computer Science and Engineering (AI & ML)",
    place: "Aurora's Technological and Research Institute, Hyderabad, Telangana",
    description:
      "Developed strong foundations in computer science, mathematics, communication, analytical thinking, and problem-solving, supporting my growth as a Data Analyst, Data Scientist, AI engineer.",
  },
];

const info = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7730010062",
  },
  {
    icon: Mail,
    label: "Email",
    value: "santhoshsss2362@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana, India",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--page-background)] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-24 h-[420px] w-[420px] rounded-full bg-[#8750f7]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal distance={30} duration={0.6} className="mb-16">
          <h2 className="bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-5xl font-black text-transparent">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <ScrollScale fromScale={0.92}>
            {/* Summary */}
            <div className="h-full rounded-[32px] bg-[var(--surface-elevated)] p-6 shadow-[var(--section-card-shadow)] backdrop-blur-xl sm:p-8">
              <h3 className="text-4xl font-black text-[var(--foreground)]">
                Summary
              </h3>

              <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
                Aspiring Data Analyst specializing in data cleaning and transforming, data analysis, data visualization, and business intelligence using Microsoft Excel, SQL, Power BI, and Tableau. Skilled in transforming raw data into meaningful insights, building interactive dashboards, identifying trends, and presenting data-driven solutions that support smarter business decisions.
              </p>

              <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
               From data cleaning and exploration to analysis and dashboard development.
 I focus on turning complex datasets into clear, actionable insights through effective storytelling and compelling visualizations.
              </p>

              {/* Info */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {info.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8750f7]/10 text-[#8750f7]">
                        <Icon size={18} />
                      </span>

                      <div className="min-w-0">
                        <p className="text-sm text-[var(--muted-foreground)]">
                          {item.label}
                        </p>

                        <p className="break-words font-bold text-[var(--foreground)]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollScale>

          <ScrollScale fromScale={0.92}>
            <ParallaxLayer speed={20}>
            <div className="h-full rounded-[32px] bg-[var(--section-accent-surface)] p-6 shadow-[var(--section-card-shadow)] !sm:p-0">
              <div className="mb-8 flex items-center gap-4">
                <GraduationCap
                  className="text-[#8750f7]"
                  size={40}
                />

                <h3 className="text-4xl font-black text-[#8750f7]">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] p-6 text-white shadow-[var(--section-accent-shadow)] sm:p-8"
                  >
                    <p className="text-xl font-black text-white/90">
                      {item.year}
                    </p>

                    <h4 className="mt-3 text-2xl font-black uppercase sm:text-3xl">
                      {item.title}
                    </h4>
                    <br />
                    <h6 className="mt-3text-xl font-black uppercase sm:text-xl">
                      {item.course}
                    </h6>

                    <p className="mt-3 text-lg text-white/90">
                      {item.place}
                    </p>

                    <p className="mt-5 text-base leading-7 text-white/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </ParallaxLayer>
          </ScrollScale>
        </div>
      </div>
    </section>
  );
}
