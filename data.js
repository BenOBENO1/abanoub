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

  // Your photo: upload a picture named photo.jpg (or photo.png) next to index.html. Leave this empty and the site finds it.
  photo: "",

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
    title: "Why are food delivery orders late? An analysis of 5,422 orders",
    date: "April 2025 orders",
    note: "Real operations data, names removed",
    summary: "I analysed one month of orders from a food delivery company I worked for, to find out whether orders really run late and where the time goes.",
    kpis: [
      { value: "5,422", label: "orders analysed" },
      { value: "63%", label: "of order time spent waiting at the restaurant" },
      { value: "77%", label: "late by the promised ETA" },
      { value: "9.5 min", label: "average last-mile delivery" }
    ],
    thumb: "late-by-eta.png",   // the small picture on the project card
    // tools: ["Excel"],   // TODO: add the tools you used for this analysis, then remove the two slashes
    problem: "Are orders running late, and if so, where exactly is the problem?",
    findings: [
      "The median order takes 45 minutes. 28 of them (63%) pass between the restaurant accepting the order and the driver picking it up. The delivery itself takes only about 9.5 minutes.",
      "By the ETA given to the customer, 77% of orders are late. But a 15-minute promise is missed 99% of the time and a 60-minute promise only 26%, while the real time is similar (about 42 to 51 minutes). Much of the lateness comes from the promise, not the performance.",
      "There is real lateness too: 24% of orders took over an hour and 6% over an hour and a half.",
      "49% of customers ordered once. The 51% who came back placed 82% of the orders and spent EGP 3,857 a month on average, against EGP 983.",
      "The top 10 drivers carried 67% of orders, and 99.7% of sales were paid in cash or by card on delivery, so daily settlement matters.",
      "20% of orders had an ETA of zero and 165 orders had no driver recorded, so I suggested making both fields mandatory."
    ],
    images: [
      { src: "time-by-stage.png",      caption: "Average minutes per stage of an order", alt: "Minutes per stage of an order" },
      { src: "late-by-eta.png",        caption: "Share of late orders by promised ETA",  alt: "Late orders by ETA" },
      { src: "wait-vs-total-time.png", caption: "Total order time by restaurant wait",   alt: "Order time by wait" },
      { src: "orders-per-day.png",     caption: "Orders per day in April",               alt: "Orders per day" },
      { src: "orders-by-hour.png",     caption: "Orders by hour of the day",             alt: "Orders by hour" },
      { src: "concentration.png",      caption: "How concentrated orders and payments are", alt: "Concentration of orders and payments" }
    ],
    links: [
      { label: "Read the full case study",  href: "delivery_analysis_report_EN.pdf" }
    ]
  },
  {
    title: "Performance comparison across 10 restaurant branches",
    date: "November 2026",
    note: "Practice project on a synthetic dataset",
    summary: "A four-page Power BI report that compares ten branches of one restaurant brand on sales, costs, menu mix and service quality, with a what-if simulator for testing waste, discount and cancellation changes.",
    problem: "Which branches lead, which lag, and where does the margin go?",
    kpis: [
      { value: "EGP 107M", label: "net sales" },
      { value: "26.1%", label: "profit margin" },
      { value: "350K", label: "orders" },
      { value: "10", label: "branches compared" }
    ],
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
