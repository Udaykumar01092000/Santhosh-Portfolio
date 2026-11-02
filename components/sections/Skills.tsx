"use client";
import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

type IconProps = { className?: string };

/* ---- Inline SVG icons (no CDN – they always load) ---- */
function ExcelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Excel">
      <rect x="18" y="8" width="40" height="48" rx="4" fill="#21A366" />
      <path d="M38 22h20M38 32h20M38 42h20" stroke="#fff" strokeOpacity=".55" strokeWidth="3" />
      <path d="M38 8v48" stroke="#185C37" strokeWidth="2" />
      <rect x="4" y="16" width="34" height="34" rx="5" fill="#107C41" />
      <path
        d="M13 26l16 14M29 26L13 40"
        stroke="#fff"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PowerBIIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Power BI">
      <rect x="8" y="34" width="12" height="22" rx="3" fill="#F8D84A" />
      <rect x="26" y="20" width="12" height="36" rx="3" fill="#F2C811" />
      <rect x="44" y="6" width="12" height="50" rx="3" fill="#DDA700" />
    </svg>
  );
}

function TableauIcon({ className }: IconProps) {
  // [cx, cy, length, thickness, colour]
  const pluses: [number, number, number, number, string][] = [
    [32, 32, 22, 5, "#1F3F6E"],
    [32, 10, 12, 3.4, "#E97627"],
    [32, 54, 12, 3.4, "#E97627"],
    [10, 32, 12, 3.4, "#5B879B"],
    [54, 32, 12, 3.4, "#5B879B"],
    [14, 14, 8, 2.6, "#C8362D"],
    [50, 14, 8, 2.6, "#5B879B"],
    [14, 50, 8, 2.6, "#5B879B"],
    [50, 50, 8, 2.6, "#E97627"],
  ];
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Tableau">
      {pluses.map(([x, y, s, t, c], i) => (
        <g key={i} fill={c}>
          <rect x={x - t / 2} y={y - s / 2} width={t} height={s} />
          <rect x={x - s / 2} y={y - t / 2} width={s} height={t} />
        </g>
      ))}
    </svg>
  );
}

type Skill = {
  name: string;
  percent: string;
  /** image URL, or an inline SVG component */
  icon: string | ((props: IconProps) => React.ReactElement);
};

const skills: Skill[] = [
 {
  name: "Excel",
  percent: "Advanced",
  icon: ExcelIcon,
},
{
  name: "Power BI",
  percent: "Advanced",
  icon: PowerBIIcon,
},
{
  name: "Tableau",
  percent: "Advanced",
  icon: TableauIcon,
},
{
  name: "SQL",
  percent: "Intermediate",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
},

{
  name: "HTML",
  percent: "Advanced",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
},
{
  name: "CSS",
  percent: "Advanced",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
},
{
  name: "Tailwind CSS",
  percent: "Intermediate",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
},
{
  name: "Bootstrap",
  percent: "Intermediate",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
},
{
  name: "JavaScript",
  percent: "Beginner",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
},
{
  name: "React",
  percent: "Beginner",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
},
{
  name: "Next.js",
  percent: "Beginner",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
},
];

/** Icon with a safe fallback: if a CDN icon ever fails to load, show the initial instead of a broken image */
function SkillIcon({ name, src }: { name: string; src: Skill["icon"] }) {
  const [failed, setFailed] = useState(false);
  const iconClass =
    "mx-auto h-16 w-16 grayscale opacity-55 transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100";

  // Inline SVG component
  if (typeof src !== "string") {
    const Icon = src;
    return <Icon className={iconClass} />;
  }

  if (failed) {
    return (
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8750f7]/15 text-2xl font-black text-[#8750f7] transition-all duration-500 group-hover:scale-110">
        {name.slice(0, 2)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className={iconClass}
    />
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--page-background)] pb-24 pt-16 sm:pb-28 sm:pt-20 lg:py-28"
    >
      <div className="absolute left-0 top-20 h-[380px] w-[380px] rounded-full bg-[#8750f7]/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal distance={30} duration={0.6}>
          <h2 className="text-4xl font-black text-[#8750f7] sm:text-5xl">
            My Skills
          </h2>
        </ScrollReveal>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
          Expertise in Excel, Power BI, Tableau, SQL, React, JavaScript, and modern web technologies for turning data into insights and building interactive dashboards.
        </p>
        <StaggerContainer stagger={0.08} className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <StaggerItem
              key={skill.name}
              className="group"
            >
              <div className="rounded-[22px] border border-[var(--skills-card-border)] bg-[var(--skills-card-surface)] p-8 shadow-[var(--section-card-shadow)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#8750f7]/45 group-hover:bg-[#2a1454] group-hover:shadow-[var(--section-accent-shadow)]">
                <SkillIcon name={skill.name} src={skill.icon} />
                <p className="mt-8 text-2xl font-black text-[var(--muted-foreground)] transition-colors duration-500 group-hover:text-[#8750f7]">
                  {skill.percent}
                </p>
              </div>
              <p className="mt-6 text-base font-medium text-[#8750f7]">
                {skill.name}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}