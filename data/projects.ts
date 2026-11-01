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
    id: "uhq-adda-admin",
    title: "UHQ Adda Admin Panel",
    category: "React",
    year: "2026",
    images: ["/projects/PowerBI_dashboard.png"],
    client: "Quiz App Management System",
    duration: "1-2 Weeks",
    role: "React & Next.js Frontend Developer",
    location: "Remote",
    summary:
      "A React and Next.js admin dashboard built for managing a quiz application with user management, question handling, subscriptions and payment tracking features.",
    summaryHighlights: [
      "React and Next.js admin dashboard",
      "Question and category management",
      "Subscription and Razorpay tracking",
    ],
    intro:
      "UHQ Adda Admin Panel was created as a React and Next.js dashboard for managing a React Native quiz application where admins can control users, quiz questions, subscriptions and application content from a centralized system.",
    challenge:
      "The platform required a structured admin experience capable of handling dynamic quiz data, CSV uploads, subscriptions, category management and payment-related tracking while keeping the dashboard simple and responsive.",
    solution:
      "I developed the complete frontend admin panel using React and Next.js by integrating backend APIs provided by another developer and building responsive dashboard modules for authentication, quiz management, subscriptions and user administration.",
    results: [
      "Implemented secure admin signup and login flow.",
      "Built quiz question management with CSV upload and manual form submissions.",
      "Added question activation, deactivation and soft delete functionality.",
      "Integrated subscription package management with Razorpay payment tracking.",
      "Created category management and category assignment workflows.",
      "Developed user and subscription tracking interfaces for admins.",
      "Integrated APIs using Axios for dynamic dashboard operations.",
      "Responsive dashboard optimized for desktop and tablet usage.",
      "Deployed and hosted the application on Netlify.",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Next.js",
      "Material UI",
      "Bootstrap",
      "Axios/API Integration",
      "Netlify",
      "Responsive Design"
    ],
    links: {
      demo: "https://uhqadda.netlify.app/",
      contact: "/#contact",
    },
    // TEST SAMPLE – replace the url with your own Power BI / Excel link, or delete this block
    dashboard: {
      title: "Live Dashboard",
      url: "https://app.powerbi.com/view?r=eyJrIjoiYzcyYTg1ZDYtZjI2Zi00NWNhLWJhYzUtZTM1NjliZjlkOGExIiwidCI6ImIwMzNhNWMyLTFhNGUtNDIwMS1iNGZiLWIwZDkzYjlhMGIxOSIsImMiOjl9&utm_source=chatgpt.com",
      aspectRatio: "16/9",
    },
  },
  {
  id: "vaartha-newsroom",
  title: "Vaartha Digital",
  category: "WordPress",
  year: "2026",
  images: ["/projects/Tableau_dashboard.png"],
  client: "Vaartha Publications",
  duration: "Ongoing",
  role: "WordPress & PHP Developer",
  location: "Hyderabad",
  summary:
    "Developed custom Sage-based WordPress platforms, custom plugins and a React Native mobile application integrated with WordPress APIs for Vaartha digital news platforms.",
  summaryHighlights: [
    "custom Sage-based WordPress platforms",
    "custom plugins",
    "React Native mobile application",
    "WordPress APIs",
  ],
    
  intro:
    "A large-scale digital news platform where I contributed to frontend development, custom WordPress functionality, plugin development, mobile application integration and day-to-day platform maintenance for both Telugu and Hindi news portals.",

  challenge:
    "The platform required scalable and responsive news websites, smooth article publishing workflows, custom interactive features for readers and reliable API-driven content delivery for mobile users while handling continuous daily traffic and content updates.",

  challengeHighlights: [
    "scalable and responsive news websites",
    "API-driven content delivery"
  ],

  solution:
    "I developed custom Sage WordPress themes for vaartha.com and hindi.vaartha.com, created custom plugins including an article voting system with shortcode widget integration, monitored platform performance, supported editorial workflows and built a React Native mobile application connected through WordPress REST APIs for dynamic content delivery.",

  results: [
    "Built and maintained custom Sage-based WordPress themes for Vaartha digital platforms.",
    
    "Developed custom WordPress plugins including an article voting system with vote percentage tracking and shortcode widget integration.",
    
    "Integrated WordPress REST APIs with a React Native mobile application for news readers.",
    
    "Improved publishing workflow support for Hindi content writers and monitored smooth article publishing operations.",
    
    "Maintained platform stability and monitored website performance for continuous news delivery.",
    
    "Created responsive and scalable frontend structures tailored for digital news consumption.",
  ],

  stack: [
    "WordPress",
    "Sage",
    "PHP",
    "REST API",
    "HTML",
    "CSS",
    "MySQL",
    "Tailwind CSS"
  ],

  links: {
    demo: "https://vaartha.com/",
    app: "https://play.google.com/store/apps/details?id=com.mycompany.vaartha&pcampaignid=web_share",
    contact: "/#contact",
  },
  dashboard: "https://365moth-my.sharepoint.com/personal/website_myonlinetraininghub_com/_layouts/15/Doc.aspx?sourcedoc={a6fba8f0-8fec-4e5c-ad5d-d11c7ee7c41f}&action=embedview&AllowTyping=True&Item=Dashboard&wdHideGridlines=True&wdInConfigurator=True&wdAllowInteractivity=True&wdHideSheetTabs=True",
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