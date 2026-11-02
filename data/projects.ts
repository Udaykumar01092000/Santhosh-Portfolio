import type { DashboardInput } from "@/data/dashboard";

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  summaryHighlights?: string[];
  images: [string, ...string[]];
  client: string;
  duration: string;
  role: string;
  location: string;
  intro: string;
  challenge: string;
  challengeHighlights?: string[];
  solution: string;
  results: string[];
  stack: string[];
  links: {
    demo?: string;
    app?: string;
    contact: string;
  };
  /**
   * OPTIONAL – add to ANY project to show live dashboard(s). Leave it out and
   * nothing renders for that project. Three ways to write it:
   *
   *   dashboard: "https://app.powerbi.com/view?r=..."          // just the link
   *
   *   dashboard: {                                              // link + options
   *     url: "https://app.powerbi.com/view?r=...",
   *     title: "Sales Dashboard",     // default "Live Dashboard"
   *     platform: "Power BI",         // default: auto-detected from the link
   *     aspectRatio: "16/9",          // default; e.g. "4/3"
   *   }
   *
   *   dashboard: [ "link-1", { url: "link-2", title: "Second view" } ]   // several
   *
   * You can also paste a whole <iframe ...> snippet as the link – it is cleaned
   * automatically (src extracted, utm_* tracking params removed).
   */
  dashboard?: DashboardInput | DashboardInput[];
};

export const projects: Project[] = [
   {
    id: "powerbi-sales-analysis",
    title: "Sales Analysis Report",
    category: "Power BI",
    year: "2026",
    images: ["/projects/PowerBI_dashboard.png"],
    client: "Sales Analytics Project",
    duration: "1 Week",
    role: "Data Analyst & Power BI Developer",
    location: "Remote",
    summary:
      "An interactive Power BI sales report covering 12.64M in total sales and 51K orders, with slicers, region-wise sales and profit tables, and KPI cards for quick decision-making.",
    summaryHighlights: [
      "12.64M total sales and 51K orders tracked",
      "Slicers for sales range, segment and year",
      "Category, sub-category and region-wise analysis",
    ],

    intro:
      "The Sales Analysis Report is a Power BI dashboard that lets business users explore sales and profit across categories, sub-categories and regions. Filters at the top let viewers narrow the data by sales range, customer segment and year, while KPI cards keep the headline numbers visible at all times.",

    challenge:
      "Sales and profit data was spread across many regions, categories and years, which made it slow to spot top-performing products or weak markets. The report needed to stay simple to use while still letting viewers drill into detail.",

    challengeHighlights: [
      "sales and profit spread across many regions",
      "simple filtering with deep detail",
    ],

    solution:
      "I cleaned and modelled the sales data, then built a single-page report with slicers for sales range, segment and year. A heat-mapped table ranks sub-categories by sales, a matrix breaks sales and profit down by region with trend arrows, and KPI cards show total orders, shipping cost, total sales and average profit.",

    results: [
      "Reported 12.64M in total sales, 51.313K total orders and 1.35M in shipping cost on one page.",

      "Ranked sub-categories with colour-scale formatting, with Phones (1,706.82K), Copiers (1,509.44K) and Chairs (1,501.68K) leading sales.",

      "Built a region-wise matrix comparing sales and profit for each sub-category, with trend arrows to flag growth.",

      "Added slicers for sales range, customer segment and year so viewers can filter the whole report instantly.",

      "Created KPI cards for total sales and average profit for quick performance checks.",

      "Designed a clear, high-contrast layout with a back-navigation button for smooth movement between report pages.",
    ],

    stack: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modelling",
      "Slicers & Filters",
      "Conditional Formatting",
      "KPI Cards",
      "Dashboard Design",
    ],

    links: {
      contact: "/#contact",
    },
    dashboard: {
      title: "Live Dashboard",
      url: "https://public.tableau.com/views/SalesPerformanceDashboard_16888888888888/SalesPerformanceDashboard?:language=en-US&:display_count=n&:origin=viz_share_link",
      aspectRatio: "16/9",
    },
  },

  {
    id: "tableau-sales-dashboard",
    title: "Sales Performance Dashboard",
    category: "Tableau",
    year: "2026",
    images: ["/projects/Tableau_dashboard.png"],
    client: "Sales Analytics Project",
    duration: "1 Week",
    role: "Data Analyst & Tableau Developer",
    location: "Remote",
    summary:
      "An interactive Tableau sales dashboard that breaks down 2,327K in total sales by region, sub-category, category and geography, with sales and profit compared side by side.",
    summaryHighlights: [
      "2,327K total sales analysed by region",
      "Sub-category, category and map views",
      "Dual-axis sales vs profit comparison",
    ],

    intro:
      "This Tableau dashboard gives business users a single place to see how sales are distributed across regions, product sub-categories and locations. It combines doughnut, pie, bar, symbol map, dual-axis and stacked column charts in one dark-themed view that is easy to scan.",

    challenge:
      "Sales data was spread across many dimensions, which made it hard to see which regions, categories and products were driving revenue and which were lagging on profit. The dashboard needed to answer those questions at a glance without overwhelming the viewer.",

    challengeHighlights: [
      "sales spread across many dimensions",
      "clear view of revenue and profit drivers",
    ],

    solution:
      "I cleaned and modelled the sales data, then built a set of linked Tableau charts on one dashboard. Each chart answers a specific question: regional share (doughnut and pie), sub-category ranking (bar), geographic spread (symbol map), sales against profit (dual axis) and category mix by region (stacked column). Parameters and calculated fields support extra views such as YTD/MTD/QTD, YoY %, and sales, profit and cost comparisons.",

    results: [
      "Showed total sales of 2,327K split across West (740K), East (692K), Central (503K) and South (392K).",

      "Ranked 17 product sub-categories, with Chairs (336K), Phones (332K) and Storage (225K) leading sales.",

      "Built a dual-axis chart to compare sales and profit by sub-category and spot low-margin products.",

      "Created a symbol map that highlights high-sales locations across the US, with tooltips such as Texas at $170.19K.",

      "Added a stacked column chart showing Furniture, Office Supplies and Technology sales by region.",

      "Used parameters and calculated fields for dynamic sales, profit and cost views.",

      "Designed a dark, high-contrast layout with consistent colours so the key numbers stand out.",
    ],

    stack: [
      "Tableau",
      "Calculated Fields",
      "Parameters",
      "Dual Axis Charts",
      "Symbol Maps",
      "Data Cleaning",
      "Dashboard Design",
    ],

    links: {
      contact: "/#contact",
    },
    dashboard: {
      title: "Live Dashboard",
      url: "https://public.tableau.com/views/SalesPerformanceDashboard_16888888888888/SalesPerformanceDashboard?:language=en-US&:display_count=n&:origin=viz_share_link",
      aspectRatio: "16/9",
    },
  },
  // {
  //   id: "eleven-cricket",
  //   title: "Eleven Cricket",
  //   category: "WordPress",
  //   year: "2024",
  //   images: [
  //     "/projects/elevencricket-1.webp"
  //   ],
  //   client: "Eleven Cricket via iBridge Digital",
  //   duration: "2-3 Weeks",
  //   role: "Web Designer & Frontend Developer at iBridge Digital",
  //   location: "Remote",
  //   summary:
  //     "A complete cricket e-commerce website delivered for an iBridge Digital client, built for browsing and purchasing cricket equipment, jerseys and accessories with categorized product management, WooCommerce integration and WhatsApp customer support.",
  //   summaryHighlights: [
  //     "Multi-category cricket e-commerce platform",
  //     "Bats, pads, gloves, jerseys and accessories management",
  //     "WooCommerce and WhatsApp integration",
  //   ],
  //   intro:
  //     "Eleven Cricket was redesigned and developed while I was working at iBridge Digital for a client in the cricket equipment space. The platform was built as a modern e-commerce website where users can explore and purchase products from various brands through organized categories, responsive product pages, WooCommerce shopping functionality and direct WhatsApp communication support.",
  //   challenge:
  //     "The project required transforming the existing website into a professional online cricket store capable of handling multiple product categories, brand-based product browsing, responsive shopping experiences and seamless customer communication while maintaining a clean and modern UI.",
  //   solution:
  //     "While working at iBridge Digital, I redesigned the complete website using WordPress and customized the frontend using HTML, CSS and JavaScript. WooCommerce was integrated for e-commerce operations including product listings, cart management and checkout functionality. Products were organized into categories such as bats, pads, gloves, jerseys, cricket balls and accessories from multiple brands to improve browsing and purchasing experiences.",
  //   results: [
  //     "Built a complete cricket e-commerce shopping experience.",
  //     "Created categorized product sections for bats, pads, gloves, jerseys, balls and accessories.",
  //     "Implemented multi-brand product browsing and management.",
  //     "Integrated WooCommerce for cart, checkout and product handling.",
  //     "Added WhatsApp integration for direct customer inquiries and support.",
  //     "Improved navigation structure and product discoverability.",
  //     "Designed responsive layouts optimized for mobile and desktop users.",
  //     "Enhanced overall website appearance with modern UI styling and layouts.",
  //     "Expanded website content with additional product and informational pages.",
  //     "Improved customer engagement and online visibility for the business.",
  //   ],
  //   stack: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "WordPress",
  //     "WooCommerce",
  //     "WhatsApp API",
  //     "Responsive Design"
  //   ],
  //   links: {
  //     demo: "https://elevencricket.com/",
  //     contact: "/#contact",
  //   },
  // },

  
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}