/* ============================================================
   THE ONLY FILE YOU EDIT.
   - Change your details in SITE.
   - To add a new project: copy one block inside PROJECTS,
     paste it at the TOP of the list, and change the text.
   - Put images in the "assets" folder and point to them below.
   ============================================================ */

window.SITE = {
  name: "Abanoub Barsoum",
  badge: "Open to new roles",
  role: "E-commerce Operations Analyst",
  location: "Egypt",
  intro: "I cover the full order cycle on a food delivery marketplace, from rider dispatch to cash settlement, and turn that data into Excel and Power BI reports that management uses.",

  email: "abanoubbarsoum7@gmail.com",
  linkedin: "https://www.linkedin.com/in/abanoub-barsoum",
  phone: "+20 128 889 3296",
  whatsapp: "201288893296",        // number only, with country code, for the WhatsApp button
  github: "",                       // add your GitHub URL here when you have it
  cv: "Abanoub_Barsoum_CV.pdf",

  // After you create a free account at goatcounter.com, put your site code here.
  // Example: if your dashboard is abanoub.goatcounter.com, write "abanoub".
  goatcounter: "",


  // Big line in the hero
  headline: "From dispatch to dashboard: operations data that teams act on.",

  // The three cards in the hero. The first one is drawn as a ring, so give it a percent.
  heroCards: [
    { value: "26.1%", percent: 26.1, label: "profit margin", sub: "10-branch Power BI project" },
    { value: "EGP 107M", label: "net sales analysed" },
    { value: "350K", label: "orders analysed" }
  ],
  heroNote: "Figures from my 10-branch Power BI project, built on a synthetic dataset.",

  about: [
    "I work on a food delivery marketplace across the whole order cycle. I coordinated 150 daily orders, rising to 550 in peak season, then moved into the finance side of the same platform, where I reconcile cash on delivery, POS and online banking receipts against platform sales above EGP 10 million and invoice more than 65 restaurant merchants.",
    "I build Excel and Power BI reports that track delivery performance, payment channel mix and merchant revenue. My Industrial Engineering background shapes how I look at both order flow and financial controls."
  ],

  stats: [
    { value: "550", label: "orders a day coordinated in peak season" },
    { value: "65+", label: "restaurant merchants invoiced for commission" },
    { value: "EGP 10M+", label: "platform sales reconciled against receipts" }
  ],

  how: [
    { title: "Run the operation", text: "Dispatch riders by restaurant proximity, plan peak-hour staffing and resolve delivery issues as they happen." },
    { title: "Close the books", text: "Reconcile cash on delivery, POS and online banking receipts against order records, and prepare merchant commission invoices." },
    { title: "Report what matters", text: "Build Excel and Power BI dashboards on delivery performance, payment mix and merchant revenue." }
  ],

  experience: [
    {
      when: "Feb 2025 to present",
      title: "Operations Analyst",
      company: "Yalla Order, El Gouna",
      summary: "Finance and operations analysis on a food delivery marketplace.",
      points: [
        "Close daily accounts for 20 riders, rising to 35 in peak periods, and investigate cash shortfalls with Operations.",
        "Reconcile cash on delivery, POS and online banking receipts against platform order records.",
        "Prepare and validate commission invoices for more than 65 restaurant merchants and standardize the invoicing procedure.",
        "Build Excel reports and dashboards that track financial and operational KPIs and support management decisions.",
        "Monitor expenditure and cash flow against budget, and flag variances for management review."
      ]
    },
    {
      when: "Apr 2024 to Feb 2025",
      title: "Operations Coordinator",
      company: "Yalla Order, El Gouna",
      summary: "Daily order coordination and rider dispatch.",
      points: [
        "Coordinated 150+ orders a day, and 450 to 550 a day in peak season.",
        "Designed peak-hour staffing plans to match rider availability to the busiest delivery periods.",
        "Tracked delivery performance metrics and reported improvement opportunities to management."
      ]
    },
    {
      when: "May 2022 to Nov 2023",
      title: "Customer Service Representative",
      company: "Orange, Sohag",
      summary: "High-volume customer support in a retail environment.",
      points: [
        "Resolved complaints through to closure and reported recurring issues to support service improvements."
      ]
    },
    {
      when: "Oct 2021 to Mar 2022",
      title: "Production Engineer",
      company: "Arab Company for Paper Industry, Sohag",
      summary: "Production monitoring and quality checks.",
      points: [
        "Monitored production performance against standards and prepared production schedules."
      ]
    }
  ],

  skills: [
    { group: "Analysis and reporting", items: ["Excel: Pivot Tables, XLOOKUP, VLOOKUP, SUMIFS", "Power BI: DAX, Power Query, data modelling", "Google Sheets and Forms: survey design and analysis", "SQL: querying, joins and filtering"] },
    { group: "Marketplace operations", items: ["Order management and rider dispatch", "Cost per order, average order value, fulfillment rate", "Capacity and peak-hour planning"] },
    { group: "Finance operations", items: ["Cash and payment reconciliation", "Merchant invoicing and commission calculation", "Budget and cash flow monitoring"] }
  ],

  education: [
    "Bachelor of Industrial Engineering, Alexandria Higher Institute for Engineering and Technology (July 2019)"
  ],
  certifications: [
    "Harnessing the Power of Data with Power BI, Microsoft (April 2024)",
    "Excel Skills for Business, Coursera (March 2023)",
    "Excel Skills for Data Analytics and Visualization, Coursera (March 2023)",
    "Analyze Data to Answer Questions, Coursera (March 2023)"
  ],
  languages: "Arabic (native), English (professional working)"
};

window.PROJECTS = [
   {
    title: "Where does delivery time go? Analysis of 5,422 food delivery orders",
    date: "November 2026",
    note: "Case study on one month of real order data, anonymized (company, restaurant and customer details removed)",
    summary: "An analysis of one month of order data from a food delivery platform: cleaning the raw export, measuring where order time is spent, checking whether late orders are really late, and looking at repeat customers and concentration risk.",
    problem: "Why do so many orders count as late, and where does the time actually go?",
    tools: ["Power BI", "Power Query", "DAX"],   // keep only the tools you actually used
    findings: [
      "The platform handled 5,422 orders in April 2025, with EGP 4.55M in food sales and an average food order of EGP 840 (delivery fees excluded).",
      "Driving is not the bottleneck: the last mile takes a median of 9.5 minutes, while the wait between restaurant acceptance and pickup takes 28 minutes, 63% of the 45-minute median order time.",
      "77% of orders count as late against the promised ETA, but orders promised in 15 minutes are late 99% of the time and those promised in 60 minutes only 26%, with similar actual times (about 42 to 51 minutes). Much of the lateness comes from the ETA, not from execution.",
      "About 20% of orders have no ETA at all, and 24% of orders take longer than 60 minutes.",
      "49% of customers ordered once. Repeat customers placed 82% of orders and spent about EGP 3,857 in the month versus EGP 983 for one-time customers.",
      "Orders are concentrated: the top 10 restaurants take 49% of orders, the top 10 drivers carry 67%, and 99.7% of payments are cash or card on delivery."
    ],
    images: [
      { src: "orders per day and hours.png",    caption: "Overview: sales, orders per day and peak hours",           alt: "Overview page of the Power BI report" },
      { src: "customers.png",   caption: "Customers: new vs returning orders and spend by segment",                  alt: "Customers page of the Power BI report" },
      { src: "concentration.png", caption: "Restaurants: concentration and scorecard",                                 alt: "Restaurants page of the Power BI report" },
      { src: "time-by-stage.png",  caption: "Operations: time by stage, ETA vs late rate, hourly heatmap",              alt: "Operations page of the Power BI report" }
    ],
    links: [
      { label: "Read the report (PDF)", url: "file:///C:/Users/abano/Downloads/delivery_analysis_report_EN.pdf" },   // paste the link, or leave empty to hide the button
      { label: "View on GitHub", url: "" }
    ]
  },
  {
    title: "Performance comparison across 10 restaurant branches",
    date: "November 2026",
    note: "Practice project on a synthetic dataset",
    summary: "A four-page Power BI report that compares ten branches of one restaurant brand on sales, costs, menu mix and service quality, with a what-if simulator for testing waste, discount and cancellation changes.",
    problem: "Which branches lead, which lag, and where does the margin go?",
    tools: ["Power BI", "DAX", "Excel PivotTables", "What-if parameters"],
    findings: [
      "The chain made EGP 107.23M in net sales and EGP 28.01M in profit across 350K orders, a 26.1% margin.",
      "6th October Mall leads on both sales (EGP 15.3M) and margin (33.1%). New Cairo trails on both (EGP 4.6M and 9.5%), with labor cost at 26.2% against an 18.0% chain average.",
      "Smouha gives a discount of 11.5% against 4.5% in most branches, and earns a 17.6% margin.",
      "San Stefano Mall has the highest delivery cancellation rate (9.5% against 6.2% for the chain) and the lowest rating (4.02 against 4.32).",
      "Heliopolis wastes 2.2% of food against 0.7% for the chain, and its margin is 25.7%.",
      "Sides carry the highest menu margin (76.8%) and grills the lowest (62.8%)."
    ],
    images: [
      { src: "overview.png",   caption: "Overview: sales and margin by branch, monthly trend", alt: "Overview page of the Power BI report" },
      { src: "operations.png", caption: "Operations: waste, cancellations, discounts and ratings", alt: "Operations and cost control page" },
      { src: "menu.png",       caption: "Menu: gross profit by item and margin by category", alt: "Menu and seasons page" },
      { src: "simulator.png",  caption: "Scenario simulator and branch KPI scorecard", alt: "Scenario simulator page" }
    ],
    links: [
      { label: "View on GitHub", url: "" }   // paste the project repo link, or leave empty to hide the button
    ]
  }
];
