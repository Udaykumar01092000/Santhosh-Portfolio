"use client";

import { LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollAnimations";

const services = [
  {
    number: "01",
    title: "Data Analysis & Exploration",
    description:
      "Analyzing complex datasets, identifying patterns, uncovering trends and extracting meaningful insights to support smarter, data-driven business decisions.",
  },
  {
    number: "02",
    title: "Interactive Dashboard Development",
    description:
      "Designing and building interactive dashboards using Power BI, Tableau and Excel to transform raw data into clear, insightful visual reports.",
  },
  {
    number: "03",
    title: "Data Cleaning & Transformation",
    description:
      "Cleaning, organizing and transforming raw datasets by handling missing values, duplicates and inconsistencies to ensure accurate and reliable analysis.",
  },
  {
    number: "04",
    title: "Business Intelligence & Reporting",
    description:
      "Developing insightful reports and KPI dashboards to monitor business performance, track key metrics and support strategic decision-making.",
  },
  {
    number: "05",
    title: "SQL & Database Analysis",
    description:
      "Writing SQL queries to retrieve, filter, join and analyze structured data, uncovering valuable information from databases.",
  },
  {
    number: "06",
    title: "Data Visualization & Storytelling",
    description:
      "Transforming complex data into compelling visual stories through meaningful charts, interactive reports and intuitive visualizations that communicate insights effectively.",
  },
];

const serviceHighlightTransition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
  mass: 0.82,
} as const;

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--page-background)] pb-24 pt-16 sm:pb-28 sm:pt-20 lg:py-28"
    >
      <div className="absolute left-1/2 top-20 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#8750f7]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal distance={30} duration={0.6} className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#8750f7]">
            Services
          </p>

          <h2 className="mt-4 bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
            My Quality Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
            Delivering insightful data analysis, interactive dashboards, and compelling visualizations that transform complex data into actionable insights, drive business intelligence, and support smarter, data-driven decisions.
          </p>
        </ScrollReveal>

        <LayoutGroup id="services-list">
          <div className="border-y border-[var(--header-border)]">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="relative border-b border-[var(--header-border)] last:border-b-0"
                >
                  {isActive ? (
                    <motion.div
                      layoutId="services-active-highlight"
                      className="absolute inset-0 bg-gradient-to-r from-[#8750f7] to-[#2a1454]"
                      transition={serviceHighlightTransition}
                    />
                  ) : null}

                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onTouchStart={() => setActiveIndex(index)}
                    onClick={() => router.push(`/?service=${encodeURIComponent(service.title)}#contact`)}
                    suppressHydrationWarning
                    className="relative z-10 grid w-full items-center gap-6 px-5 py-7 text-left sm:grid-cols-[78px_1.15fr_1.45fr_66px] sm:px-7 lg:px-8"
                  >
                    <span
                      className={`text-lg font-black transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#8750f7]"
                      }`}
                    >
                      {service.number}
                    </span>

                    <h3
                      className={`text-2xl font-black transition-colors duration-300 sm:text-3xl ${
                        isActive ? "text-white" : "text-[var(--foreground)]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-sm font-medium leading-6 transition-colors duration-300 sm:text-base sm:leading-7 ${
                        isActive
                          ? "text-white/88"
                          : "text-[var(--muted-foreground)]"
                      }`}
                    >
                      {service.description}
                    </p>

                    <span className="flex justify-start sm:justify-end">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white/12 text-white"
                            : "bg-[#8750f7]/10 text-[#8750f7]"
                        }`}
                      >
                        <ArrowUpRight
                          size={26}
                          className={`transition-transform duration-300 ${
                            isActive ? "rotate-45" : ""
                          }`}
                        />
                      </span>
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
