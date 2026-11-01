/**
 * data/dashboard.ts
 * Plain (non-client) module: types + helpers shared by data/projects.ts,
 * the project page (server) and the DashboardEmbed component (client).
 */

export type ProjectDashboard = {
  /** Embed link – or paste the whole <iframe ...> snippet, it is cleaned automatically */
  url: string;
  /** Heading in the top bar. Default: "Live Dashboard" */
  title?: string;
  /** Label under the heading. Optional – auto-detected from the URL */
  platform?: string;
  /** Desktop width/height ratio, e.g. "16/9" (default), "4/3", "3/2" */
  aspectRatio?: string;
};

/** A dashboard can be written as a bare link or as a full object. */
export type DashboardInput = string | ProjectDashboard;

/**
 * Turns whatever you paste into a clean embeddable URL:
 *  - pulls src="..." out of a pasted <iframe> snippet
 *  - decodes &amp;
 *  - strips tracking params (utm_source=chatgpt.com etc.)
 *  - converts a Tableau Public "app/profile/.../viz/..." share link to its embed form
 */
export function cleanEmbedUrl(raw: string): string {
  let value = (raw ?? "").trim();
  if (!value) return "";

  const iframeSrc = value.match(/src\s*=\s*["']([^"']+)["']/i);
  if (iframeSrc) value = iframeSrc[1];

  value = value.replace(/&amp;/g, "&");

  const tableau = value.match(
    /public\.tableau\.com\/(?:app\/profile\/[^/]+\/)?viz\/([^/?#]+)\/([^/?#]+)/i,
  );
  if (tableau) {
    return `https://public.tableau.com/views/${tableau[1]}/${tableau[2]}?:showVizHome=no&:embed=true`;
  }

  // remove utm_* params but leave every other character of the link untouched
  if (/[?&]utm_[^&#]*/i.test(value)) {
    value = value.replace(/[?&]utm_[^&#]*/gi, "");
    if (!value.includes("?") && value.includes("&")) {
      value = value.replace("&", "?");
    }
  }

  return value;
}

/**
 * Accepts: nothing | "link" | { url, ... } | an array of those
 * Returns: a clean list of dashboards ready to render (empty list = render nothing)
 */
export function getProjectDashboards(
  input?: DashboardInput | DashboardInput[],
): ProjectDashboard[] {
  const list = Array.isArray(input) ? input : input ? [input] : [];

  return list
    .map((item) => (typeof item === "string" ? { url: item } : item))
    .map((item) => ({ ...item, url: cleanEmbedUrl(item.url) }))
    .filter((item) => item.url.length > 0);
}