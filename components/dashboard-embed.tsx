"use client";

import { useRef } from "react";
import { BarChart3, ExternalLink, Maximize2 } from "lucide-react";
import type { ProjectDashboard } from "@/data/dashboard";

export type { ProjectDashboard };

/** Auto-label the platform from the link so the data only needs `url`. */
function detectPlatform(url: string) {
  const u = url.toLowerCase();
  if (u.includes("powerbi.com") || u.includes("powerbigov")) return "Power BI";
  if (u.includes("tableau")) return "Tableau";
  if (
    u.includes("officeapps.live.com") ||
    u.includes("sharepoint.com") ||
    u.includes("onedrive.live.com") ||
    u.includes("1drv.ms") ||
    u.includes(".xlsx")
  )
    return "Excel";
  if (u.includes("lookerstudio.google.com") || u.includes("datastudio.google.com"))
    return "Looker Studio";
  if (u.includes("docs.google.com/spreadsheets")) return "Google Sheets";
  return "Live Dashboard";
}

/**
 * Reusable full-width dashboard container.
 *   <DashboardEmbed {...dashboard} />   (dashboard comes from data/projects.ts)
 * Uses the same theme tokens as the rest of the page.
 */
export function DashboardEmbed({
  url,
  title = "Live Dashboard",
  platform,
  aspectRatio = "16/9",
}: ProjectDashboard) {
  const frameRef = useRef<HTMLDivElement>(null);
  const platformLabel = platform ?? detectPlatform(url);

  const goFullscreen = () => {
    frameRef.current?.requestFullscreen?.().catch(() => {});
  };

  return (
    <div className="mt-14 w-full rounded-[30px] border border-[var(--header-border)] bg-[var(--surface-elevated)] p-3 shadow-[var(--section-card-shadow)] sm:p-4 lg:p-5">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-4 pt-1 sm:px-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white shadow-[0_12px_28px_rgba(135,80,247,0.28)]">
            <BarChart3 size={18} />
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8750f7]">
              {title}
            </p>
            <p className="mt-1 text-xs font-semibold text-[var(--muted-foreground)]">
              {platformLabel}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--header-border)] bg-transparent px-4 py-2 text-xs font-bold text-[var(--foreground)] transition hover:border-[#8750f7] hover:text-[#8750f7]"
          >
            Open
            <ExternalLink size={14} />
          </a>
          <button
            type="button"
            onClick={goFullscreen}
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#8750f7] to-[#2a1454] px-4 py-2 text-xs font-bold text-white shadow-[0_12px_28px_rgba(135,80,247,0.28)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8750f7]/35"
          >
            Fullscreen
            <Maximize2 size={14} />
          </button>
        </div>
      </div>

      {/* Frame – edge to edge. Ratio comes from data through a CSS variable
          (a static class, so Tailwind always generates it). */}
      <div
        ref={frameRef}
        style={{ "--dash-ratio": aspectRatio } as React.CSSProperties}
        className="relative h-[480px] w-full overflow-hidden rounded-[22px] border border-[var(--header-border)] bg-[var(--page-background)] sm:h-[560px] lg:h-auto lg:[aspect-ratio:var(--dash-ratio)]"
      >
        {/* Spinner sits BEHIND the iframe: no load-event state needed, so it can
            never get stuck on top of the dashboard. The dashboard's own opaque
            page covers it as soon as it paints. */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#8750f7]/25 border-t-[#8750f7]" />
        </div>

        <iframe
          src={url}
          title={title}
          className="absolute inset-0 z-10 h-full w-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}