export type Language = "en" | "sv" | "es";

export const translations = {
  en: {
    // Header
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      howItWorks: "How it works",
      packages: "Packages",
      contact: "Contact",
      bookCall: "Book a call",
    },
    // Hero
    hero: {
      brand: "EkSthlm",
      tagline: "Nordic Clarity in Real Estate & Responsible Sourcing",
      description: "Independent customer representation for renovation projects—tight scope, fair cost, and a result that matches the original vision.",
      ctaBook: "Book a call",
      ctaPortfolio: "View portfolio",
    },
    // Services
    services: {
      title: "Services",
      subtitle: "Customer-led project execution with tight cost control and strong decision support.",
      differentiator: "\"The contractor executes. I represent the customer—cost, quality, and decisions.\"",
      projectManagement: {
        title: "Project Management (Customer-First)",
        points: [
          "Lead renovation projects end-to-end (bathroom, kitchen, apartment)",
          "Clear scope, timeline, decision log",
          "Quality follow-ups and final punch list",
        ],
      },
      costManagement: {
        title: "Cost & Spend Management",
        points: [
          "Transparent budget (forecast vs actual)",
          "Option comparisons (A/B/C) and value sourcing",
          "Identify savings without compromising design/quality",
        ],
      },
      quoteControl: {
        title: "Quote & Invoice Control",
        points: [
          "Review subcontractor quotes and scope clarity",
          "Control variations/change orders before approval",
          "Validate invoices vs agreed work and progress",
        ],
      },
      designPlanning: {
        title: "Design, Layout & 3D Planning",
        points: [
          "Kitchen/bathroom layout planning",
          "Tile distribution planning (symmetry, cut strategy, clean lines)",
          "Simple 3D visuals so decisions are made upfront",
        ],
      },
    },
    // Trust Section
    trust: {
      title: "Execution you can trust",
      subtitle: "Quality delivery backed by proven expertise.",
      contractor: {
        title: "Trusted Main Contractor",
        description: "I work with a trusted main contractor with decades of experience in the industry.",
      },
      trackRecord: {
        title: "Proven Track Record",
        description: "Proven delivery across low, mid and super-high-end projects in Scandinavia and internationally.",
      },
      customerFirst: {
        title: "Customer-First Approach",
        description: "My role is to ensure execution follows the customer's wishes and the agreed scope/budget.",
      },
    },
    // Process
    process: {
      title: "How it works",
      subtitle: "A structured approach from first contact to final handover.",
      steps: [
        { title: "Intro call + goals", description: "We discuss your project vision, constraints, and timeline." },
        { title: "Site visit + measurements", description: "If needed, I visit the property to assess scope and conditions." },
        { title: "Plan + options + budget clarity", description: "Clear proposals with pricing options so you can decide confidently." },
        { title: "Execution control", description: "Timeline management, decision tracking, and cost oversight." },
        { title: "Handover + punch list", description: "Final quality check and comprehensive handover documentation." },
      ],
    },
    // Packages
    packages: {
      title: "Engagement options",
      subtitle: "Choose the level of support that fits your project.",
      mostPopular: "Most Popular",
      getStarted: "Get started",
      quoteReview: {
        title: "Quote & Cost Review",
        price: "",
        description: "Get clarity on subcontractor quotes and identify potential savings.",
        features: [
          "Review of up to 3 quotes",
          "Scope clarity assessment",
          "Cost comparison analysis",
          "Recommendations report",
        ],
      },
      designSupport: {
        title: "Design & Planning Support",
        price: "",
        description: "Layout optimization and visual planning before execution begins.",
        features: [
          "Layout planning",
          "Material selection support",
          "3D visualizations",
          "Budget estimation",
        ],
      },
      fullProject: {
        title: "Full Project Lead (End-to-End)",
        price: "",
        description: "Complete project management from planning to final handover.",
        features: [
          "All planning services included",
          "Contractor coordination",
          "Weekly progress reports",
          "Final punch list & handover",
        ],
      },
    },
    // Contact
    contact: {
      title: "Get in touch",
      subtitle: "Send a message with your project scope and timeline. I'll respond within 24 hours.",
      email: "Email",
      phone: "Phone",
      serviceArea: "Service Area",
      serviceAreaValue: "Stockholm + surrounding areas",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone (optional)",
        location: "Location",
        locationPlaceholder: "e.g., Södermalm",
        projectType: "Project type",
        selectProjectType: "Select project type",
        message: "Message",
        messagePlaceholder: "Describe your project, timeline, and any specific concerns...",
        interestedIn: "I'm interested in:",
        quoteReview: "Quote review",
        planningSupport: "Planning support",
        projectLead: "End-to-end project lead",
        submit: "Send message",
        submitting: "Sending...",
        successTitle: "Message sent",
        successDescription: "Thank you for your inquiry. I'll be in touch soon.",
      },
      projectTypes: [
        "Bathroom renovation",
        "Kitchen renovation",
        "Full apartment remodel",
        "Interior upgrades",
        "Other",
      ],
    },
    // Portfolio Preview
    portfolioPreview: {
      title: "Portfolio",
      subtitle: "Selected projects showcasing transformation and attention to detail.",
      viewAll: "View all projects",
      before: "Before",
      after: "After",
    },
    // Portfolio Page
    portfolio: {
      pageTitle: "Portfolio",
      pageSubtitle: "Selected projects showcasing our approach to renovation project management. Each case study includes before, during, and after documentation.",
      keyMaterials: "Key Materials",
      whatWeDid: "What we did",
      outcome: "Outcome",
      ctaTitle: "Ready to start your project?",
      ctaSubtitle: "Let's discuss your renovation goals and how I can help.",
      ctaButton: "Get in touch",
      during: "During",
      projects: [
        {
          id: "bathroom-sodermalm",
          title: "Bathroom Renovation – Södermalm",
          location: "Södermalm, Stockholm",
          scope: "Full bathroom renovation",
          duration: "4 weeks",
          budget: "150,000 - 200,000 SEK",
          materials: ["Carrara marble", "Oak vanity", "Brass fixtures"],
          whatWeDid: [
            "Complete demolition of existing bathroom",
            "New plumbing and electrical work",
            "Custom oak vanity installation",
            "Marble tile installation with symmetrical cut strategy",
            "Underfloor heating system",
          ],
          outcome: [
            "Delivered on time and 8% under budget",
            "Maximized storage with custom solutions",
            "Clean, Nordic aesthetic with lasting materials",
          ],
        },
        {
          id: "kitchen-ostermalm",
          title: "Kitchen Renovation – Östermalm",
          location: "Östermalm, Stockholm",
          scope: "Complete kitchen remodel",
          duration: "6 weeks",
          budget: "280,000 - 350,000 SEK",
          materials: ["Solid oak countertops", "Integrated appliances", "Quartz backsplash"],
          whatWeDid: [
            "Layout optimization for workflow",
            "Custom cabinetry design",
            "Premium appliance sourcing",
            "Lighting design with under-cabinet LED",
            "Solid oak countertop installation",
          ],
          outcome: [
            "Improved kitchen workflow by 40%",
            "12% savings on appliance sourcing",
            "Clean lines, maximized counter space",
          ],
        },
        {
          id: "apartment-vasastan",
          title: "Full Apartment Remodel – Vasastan",
          location: "Vasastan, Stockholm",
          scope: "Complete apartment renovation",
          duration: "12 weeks",
          budget: "800,000 - 1,000,000 SEK",
          materials: ["Oak flooring", "Custom millwork", "Natural stone"],
          whatWeDid: [
            "Open plan layout redesign",
            "Complete electrical and plumbing update",
            "New oak flooring throughout",
            "Custom built-in storage solutions",
            "Kitchen and two bathroom renovations",
          ],
          outcome: [
            "Completed on schedule with weekly updates",
            "Increased property value by estimated 15%",
            "Bright, open Scandinavian living space",
          ],
        },
      ],
    },
    // Services Page
    servicesPage: {
      title: "Services",
      subtitle: "Customer-led project execution with tight cost control and strong decision support, delivered in collaboration with a trusted main contractor with decades of experience.",
      differentiator: "\"The contractor executes. I represent the customer—cost, quality, and decisions.\"",
      whatsIncluded: "What's included:",
      ctaTitle: "Not sure which service you need?",
      ctaSubtitle: "Book a free intro call to discuss your project and find the right support level.",
      ctaButton: "Book a free call",
      items: [
        {
          title: "Project Management (Customer-First)",
          description: "Lead renovation projects end-to-end with complete oversight.",
          ideal: "Ideal for full bathroom, kitchen, or apartment renovations.",
          features: [
            "Full project coordination from start to handover",
            "Clear scope definition and timeline management",
            "Regular progress updates and decision logs",
            "Subcontractor coordination and oversight",
            "Quality control and final punch list",
            "Risk identification and mitigation",
          ],
        },
        {
          title: "Cost & Spend Management",
          description: "Transparent budgeting with real-time cost visibility.",
          ideal: "Ideal for cost-conscious renovations of any size.",
          features: [
            "Detailed budget breakdown (forecast vs actual)",
            "Option comparisons (A/B/C scenarios)",
            "Value sourcing without compromising quality",
            "Spend tracking with weekly updates",
            "Variance analysis and cost optimization",
            "Final cost reconciliation",
          ],
        },
        {
          title: "Quote & Invoice Control",
          description: "Protect your investment with expert quote validation.",
          ideal: "Ideal for validating contractor proposals.",
          features: [
            "Subcontractor quote review and comparison",
            "Scope clarity assessment",
            "Change order evaluation before approval",
            "Invoice validation vs agreed work",
            "Progress payment verification",
            "Final account settlement",
          ],
        },
        {
          title: "Design, Layout & 3D Planning",
          description: "Visualize your renovation before execution begins.",
          ideal: "Ideal for planning phases before contractor engagement.",
          features: [
            "Kitchen and bathroom layout optimization",
            "Tile distribution planning (symmetry, cuts)",
            "3D visualizations for decision support",
            "Material selection guidance",
            "Lighting and fixture placement",
            "Space utilization analysis",
          ],
        },
      ],
    },
    // Footer
    footer: {
      tagline: "Nordic Clarity in Real Estate & Responsible Sourcing. Customer-led project execution with tight cost control.",
      serviceArea: "Stockholm - Sweden - The World",
      quickLinks: "Quick Links",
      contact: "Contact",
      copyright: "All rights reserved.",
    },
  },
  sv: {
    // Header
    nav: {
      services: "Tjänster",
      portfolio: "Portfolio",
      howItWorks: "Så fungerar det",
      packages: "Paket",
      contact: "Kontakt",
      bookCall: "Boka samtal",
    },
    // Hero
    hero: {
      brand: "EkSthlm",
      tagline: "Nordisk klarhet i fastigheter & ansvarsfull anskaffning",
      description: "Oberoende kundrepresentation för renoveringsprojekt—tydlig omfattning, rättvist pris och ett resultat som matchar den ursprungliga visionen.",
      ctaBook: "Boka samtal",
      ctaPortfolio: "Se portfolio",
    },
    // Services
    services: {
      title: "Tjänster",
      subtitle: "Kundledd projektgenomförande med stram kostnadskontroll och starkt beslutsstöd.",
      differentiator: "\"Entreprenören utför. Jag representerar kunden—kostnad, kvalitet och beslut.\"",
      projectManagement: {
        title: "Projektledning (Kundfokus)",
        points: [
          "Leda renoveringsprojekt från början till slut (badrum, kök, lägenhet)",
          "Tydlig omfattning, tidslinje, beslutslogg",
          "Kvalitetsuppföljning och slutbesiktning",
        ],
      },
      costManagement: {
        title: "Kostnads- & utgiftshantering",
        points: [
          "Transparent budget (prognos vs faktisk)",
          "Alternativjämförelser (A/B/C) och värdeoptimering",
          "Identifiera besparingar utan att kompromissa design/kvalitet",
        ],
      },
      quoteControl: {
        title: "Offert- & fakturakontroll",
        points: [
          "Granska underentreprenörers offerter och tydlighet i omfattning",
          "Kontrollera ändringar/tilläggsarbeten före godkännande",
          "Validera fakturor mot avtalat arbete och framsteg",
        ],
      },
      designPlanning: {
        title: "Design, layout & 3D-planering",
        points: [
          "Kök/badrumsplanering",
          "Kakelfördelning (symmetri, skärstrategi, rena linjer)",
          "Enkla 3D-visualiseringar för beslut i förväg",
        ],
      },
    },
    // Trust Section
    trust: {
      title: "Utförande du kan lita på",
      subtitle: "Kvalitetsleverans stödd av bevisad expertis.",
      contractor: {
        title: "Betrodd huvudentreprenör",
        description: "Jag arbetar med en betrodd huvudentreprenör med decenniers erfarenhet i branschen.",
      },
      trackRecord: {
        title: "Bevisad meritlista",
        description: "Bevisad leverans över låg-, medel- och superhögklassiga projekt i Skandinavien och internationellt.",
      },
      customerFirst: {
        title: "Kundfokuserat tillvägagångssätt",
        description: "Min roll är att säkerställa att utförandet följer kundens önskemål och den överenskomna omfattningen/budgeten.",
      },
    },
    // Process
    process: {
      title: "Så fungerar det",
      subtitle: "Ett strukturerat tillvägagångssätt från första kontakt till slutleverans.",
      steps: [
        { title: "Introsamtal + mål", description: "Vi diskuterar din projektvision, begränsningar och tidslinje." },
        { title: "Platsbesök + mätningar", description: "Vid behov besöker jag fastigheten för att bedöma omfattning och förutsättningar." },
        { title: "Plan + alternativ + budgetklarhet", description: "Tydliga förslag med prisalternativ så att du kan besluta med säkerhet." },
        { title: "Genomförandekontroll", description: "Tidslinjehantering, beslutsspårning och kostnadsöversikt." },
        { title: "Överlämning + besiktning", description: "Slutlig kvalitetskontroll och omfattande överlämningsdokumentation." },
      ],
    },
    // Packages
    packages: {
      title: "Engagemangsalternativ",
      subtitle: "Välj den supportnivå som passar ditt projekt.",
      mostPopular: "Mest populär",
      getStarted: "Kom igång",
      quoteReview: {
        title: "Offert- & kostnadsgranskning",
        price: "",
        description: "Få klarhet i underentreprenörers offerter och identifiera potentiella besparingar.",
        features: [
          "Granskning av upp till 3 offerter",
          "Bedömning av omfattningstydlighet",
          "Kostnadsjämförelseanalys",
          "Rekommendationsrapport",
        ],
      },
      designSupport: {
        title: "Design- & planeringsstöd",
        price: "",
        description: "Layoutoptimering och visuell planering innan genomförandet börjar.",
        features: [
          "Layoutplanering",
          "Materialvalsstöd",
          "3D-visualiseringar",
          "Budgetuppskattning",
        ],
      },
      fullProject: {
        title: "Fullständig projektledning (Helhet)",
        price: "",
        description: "Komplett projektledning från planering till slutleverans.",
        features: [
          "Alla planeringstjänster inkluderade",
          "Entreprenörskoordinering",
          "Veckovisa framstegsrapporter",
          "Slutbesiktning & överlämning",
        ],
      },
    },
    // Contact
    contact: {
      title: "Kontakta oss",
      subtitle: "Skicka ett meddelande med din projektomfattning och tidslinje. Jag svarar inom 24 timmar.",
      email: "E-post",
      phone: "Telefon",
      serviceArea: "Tjänsteområde",
      serviceAreaValue: "Stockholm + omgivande områden",
      form: {
        name: "Namn",
        email: "E-post",
        phone: "Telefon (valfritt)",
        location: "Plats",
        locationPlaceholder: "t.ex. Södermalm",
        projectType: "Projekttyp",
        selectProjectType: "Välj projekttyp",
        message: "Meddelande",
        messagePlaceholder: "Beskriv ditt projekt, tidslinje och eventuella specifika frågor...",
        interestedIn: "Jag är intresserad av:",
        quoteReview: "Offertgranskning",
        planningSupport: "Planeringsstöd",
        projectLead: "Helhetsprojektledning",
        submit: "Skicka meddelande",
        submitting: "Skickar...",
        successTitle: "Meddelande skickat",
        successDescription: "Tack för din förfrågan. Jag hör av mig snart.",
      },
      projectTypes: [
        "Badrumsrenovering",
        "Köksrenovering",
        "Fullständig lägenhetsrenovering",
        "Interiöruppgraderingar",
        "Övrigt",
      ],
    },
    // Portfolio Preview
    portfolioPreview: {
      title: "Portfolio",
      subtitle: "Utvalda projekt som visar transformation och uppmärksamhet på detaljer.",
      viewAll: "Se alla projekt",
      before: "Före",
      after: "Efter",
    },
    // Portfolio Page
    portfolio: {
      pageTitle: "Portfolio",
      pageSubtitle: "Utvalda projekt som visar vårt tillvägagångssätt för renoveringsprojektledning. Varje fallstudie inkluderar före, under och efter dokumentation.",
      keyMaterials: "Nyckelmaterial",
      whatWeDid: "Vad vi gjorde",
      outcome: "Resultat",
      ctaTitle: "Redo att starta ditt projekt?",
      ctaSubtitle: "Låt oss diskutera dina renoveringsmål och hur jag kan hjälpa.",
      ctaButton: "Kontakta oss",
      during: "Under",
      projects: [
        {
          id: "bathroom-sodermalm",
          title: "Badrumsrenovering – Södermalm",
          location: "Södermalm, Stockholm",
          scope: "Fullständig badrumsrenovering",
          duration: "4 veckor",
          budget: "150 000 - 200 000 SEK",
          materials: ["Carraramarmor", "Ekbänkskåp", "Mässingsarmaturer"],
          whatWeDid: [
            "Komplett rivning av befintligt badrum",
            "Ny VVS och el",
            "Installation av specialtillverkat ekbänkskåp",
            "Marmorplattsättning med symmetrisk skärstrategi",
            "Golvvärmesystem",
          ],
          outcome: [
            "Levererat i tid och 8% under budget",
            "Maximerat förvaring med skräddarsydda lösningar",
            "Ren, nordisk estetik med hållbara material",
          ],
        },
        {
          id: "kitchen-ostermalm",
          title: "Köksrenovering – Östermalm",
          location: "Östermalm, Stockholm",
          scope: "Komplett köksrenovering",
          duration: "6 veckor",
          budget: "280 000 - 350 000 SEK",
          materials: ["Massiva ekbänkskivor", "Integrerade vitvaror", "Kvartsstänkskydd"],
          whatWeDid: [
            "Layoutoptimering för arbetsflöde",
            "Skräddarsydd skåpdesign",
            "Premium vitvaruinköp",
            "Belysningsdesign med LED under skåp",
            "Installation av massiva ekbänkskivor",
          ],
          outcome: [
            "Förbättrat köksarbetsflöde med 40%",
            "12% besparingar på vitvaruinköp",
            "Rena linjer, maximerad bänkyta",
          ],
        },
        {
          id: "apartment-vasastan",
          title: "Fullständig lägenhetsrenovering – Vasastan",
          location: "Vasastan, Stockholm",
          scope: "Komplett lägenhetsrenovering",
          duration: "12 veckor",
          budget: "800 000 - 1 000 000 SEK",
          materials: ["Ekgolv", "Specialsnickeri", "Natursten"],
          whatWeDid: [
            "Öppen planlösning omdesign",
            "Komplett el- och VVS-uppdatering",
            "Nytt ekgolv genomgående",
            "Skräddarsydda inbyggda förvaringslösningar",
            "Kök och två badrumsrenoveringar",
          ],
          outcome: [
            "Slutfört enligt tidsplan med veckovisa uppdateringar",
            "Ökat fastighetsvärde med uppskattningsvis 15%",
            "Ljust, öppet skandinaviskt boendeutrymme",
          ],
        },
      ],
    },
    // Services Page
    servicesPage: {
      title: "Tjänster",
      subtitle: "Kundledd projektgenomförande med stram kostnadskontroll och starkt beslutsstöd, levererat i samarbete med en betrodd huvudentreprenör med decenniers erfarenhet.",
      differentiator: "\"Entreprenören utför. Jag representerar kunden—kostnad, kvalitet och beslut.\"",
      whatsIncluded: "Vad som ingår:",
      ctaTitle: "Osäker på vilken tjänst du behöver?",
      ctaSubtitle: "Boka ett kostnadsfritt introsamtal för att diskutera ditt projekt och hitta rätt supportnivå.",
      ctaButton: "Boka kostnadsfritt samtal",
      items: [
        {
          title: "Projektledning (Kundfokus)",
          description: "Leda renoveringsprojekt från början till slut med fullständig översikt.",
          ideal: "Idealisk för fullständiga badrum-, köks- eller lägenhetsrenoveringar.",
          features: [
            "Fullständig projektkoordinering från start till överlämning",
            "Tydlig omfattningsdefinition och tidslinjehantering",
            "Regelbundna framstegsuppdateringar och beslutsloggar",
            "Underentreprenörskoordinering och tillsyn",
            "Kvalitetskontroll och slutbesiktning",
            "Riskidentifiering och riskminimering",
          ],
        },
        {
          title: "Kostnads- & utgiftshantering",
          description: "Transparent budgetering med realtids kostnadssynlighet.",
          ideal: "Idealisk för kostnadmedvetna renoveringar oavsett storlek.",
          features: [
            "Detaljerad budgetuppdelning (prognos vs faktisk)",
            "Alternativjämförelser (A/B/C-scenarier)",
            "Värdeoptimering utan att kompromissa kvalitet",
            "Utgiftsspårning med veckovisa uppdateringar",
            "Avvikelseanalys och kostnadsoptimering",
            "Slutlig kostnadsavstämning",
          ],
        },
        {
          title: "Offert- & fakturakontroll",
          description: "Skydda din investering med expertoffertvalidering.",
          ideal: "Idealisk för validering av entreprenörsförslag.",
          features: [
            "Granskning och jämförelse av underentreprenörsofferter",
            "Bedömning av omfattningstydlighet",
            "Utvärdering av ändringsorder före godkännande",
            "Fakturavalidering mot avtalat arbete",
            "Verifiering av delbetalningar",
            "Slutlig kontoavräkning",
          ],
        },
        {
          title: "Design, layout & 3D-planering",
          description: "Visualisera din renovering innan genomförandet börjar.",
          ideal: "Idealisk för planeringsfaser innan entreprenörsengagemang.",
          features: [
            "Optimering av köks- och badrumslayout",
            "Kakelfördelningsplanering (symmetri, skär)",
            "3D-visualiseringar för beslutsstöd",
            "Materialvalsvägledning",
            "Belysning och armaturplacering",
            "Analys av utrymmesutnyttjande",
          ],
        },
      ],
    },
    // Footer
    footer: {
      tagline: "Nordisk klarhet i fastigheter & ansvarsfull anskaffning. Kundledd projektgenomförande med stram kostnadskontroll.",
      serviceArea: "Stockholm - Sverige - Världen",
      quickLinks: "Snabblänkar",
      contact: "Kontakt",
      copyright: "Alla rättigheter förbehållna.",
    },
  },
  es: {
    // Header
    nav: {
      services: "Servicios",
      portfolio: "Portfolio",
      howItWorks: "Cómo funciona",
      packages: "Paquetes",
      contact: "Contacto",
      bookCall: "Reservar llamada",
    },
    // Hero
    hero: {
      brand: "EkSthlm",
      tagline: "Claridad nórdica en bienes raíces y abastecimiento responsable",
      description: "Representación independiente del cliente para proyectos de renovación—alcance definido, costo justo y un resultado que coincide con la visión original.",
      ctaBook: "Reservar llamada",
      ctaPortfolio: "Ver portfolio",
    },
    // Services
    services: {
      title: "Servicios",
      subtitle: "Ejecución de proyectos centrada en el cliente con control estricto de costos y sólido apoyo en la toma de decisiones.",
      differentiator: "\"El contratista ejecuta. Yo represento al cliente—costo, calidad y decisiones.\"",
      projectManagement: {
        title: "Gestión de proyectos (Centrada en el cliente)",
        points: [
          "Liderar proyectos de renovación de principio a fin (baño, cocina, apartamento)",
          "Alcance claro, cronograma, registro de decisiones",
          "Seguimiento de calidad y lista final de pendientes",
        ],
      },
      costManagement: {
        title: "Gestión de costos y gastos",
        points: [
          "Presupuesto transparente (pronóstico vs real)",
          "Comparación de opciones (A/B/C) y optimización de valor",
          "Identificar ahorros sin comprometer diseño/calidad",
        ],
      },
      quoteControl: {
        title: "Control de presupuestos y facturas",
        points: [
          "Revisar presupuestos de subcontratistas y claridad del alcance",
          "Controlar variaciones/órdenes de cambio antes de la aprobación",
          "Validar facturas vs trabajo acordado y progreso",
        ],
      },
      designPlanning: {
        title: "Diseño, distribución y planificación 3D",
        points: [
          "Planificación de distribución de cocina/baño",
          "Planificación de distribución de azulejos (simetría, estrategia de corte, líneas limpias)",
          "Visualizaciones 3D simples para tomar decisiones por adelantado",
        ],
      },
    },
    // Trust Section
    trust: {
      title: "Ejecución en la que puedes confiar",
      subtitle: "Entrega de calidad respaldada por experiencia comprobada.",
      contractor: {
        title: "Contratista principal de confianza",
        description: "Trabajo con un contratista principal de confianza con décadas de experiencia en la industria.",
      },
      trackRecord: {
        title: "Historial comprobado",
        description: "Entrega comprobada en proyectos de gama baja, media y super alta en Escandinavia e internacionalmente.",
      },
      customerFirst: {
        title: "Enfoque centrado en el cliente",
        description: "Mi rol es asegurar que la ejecución siga los deseos del cliente y el alcance/presupuesto acordado.",
      },
    },
    // Process
    process: {
      title: "Cómo funciona",
      subtitle: "Un enfoque estructurado desde el primer contacto hasta la entrega final.",
      steps: [
        { title: "Llamada inicial + objetivos", description: "Discutimos tu visión del proyecto, restricciones y cronograma." },
        { title: "Visita al sitio + mediciones", description: "Si es necesario, visito la propiedad para evaluar el alcance y las condiciones." },
        { title: "Plan + opciones + claridad presupuestaria", description: "Propuestas claras con opciones de precios para que puedas decidir con confianza." },
        { title: "Control de ejecución", description: "Gestión del cronograma, seguimiento de decisiones y supervisión de costos." },
        { title: "Entrega + lista de pendientes", description: "Control de calidad final y documentación completa de entrega." },
      ],
    },
    // Packages
    packages: {
      title: "Opciones de contratación",
      subtitle: "Elige el nivel de apoyo que se adapte a tu proyecto.",
      mostPopular: "Más popular",
      getStarted: "Comenzar",
      quoteReview: {
        title: "Revisión de presupuestos y costos",
        price: "",
        description: "Obtén claridad sobre los presupuestos de subcontratistas e identifica ahorros potenciales.",
        features: [
          "Revisión de hasta 3 presupuestos",
          "Evaluación de claridad del alcance",
          "Análisis comparativo de costos",
          "Informe de recomendaciones",
        ],
      },
      designSupport: {
        title: "Apoyo en diseño y planificación",
        price: "",
        description: "Optimización de distribución y planificación visual antes de que comience la ejecución.",
        features: [
          "Planificación de distribución",
          "Apoyo en selección de materiales",
          "Visualizaciones 3D",
          "Estimación de presupuesto",
        ],
      },
      fullProject: {
        title: "Gestión completa del proyecto (Integral)",
        price: "",
        description: "Gestión completa del proyecto desde la planificación hasta la entrega final.",
        features: [
          "Todos los servicios de planificación incluidos",
          "Coordinación de contratistas",
          "Informes de progreso semanales",
          "Lista final de pendientes y entrega",
        ],
      },
    },
    // Contact
    contact: {
      title: "Contáctanos",
      subtitle: "Envía un mensaje con el alcance de tu proyecto y cronograma. Responderé dentro de 24 horas.",
      email: "Correo electrónico",
      phone: "Teléfono",
      serviceArea: "Área de servicio",
      serviceAreaValue: "Estocolmo + áreas circundantes",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono (opcional)",
        location: "Ubicación",
        locationPlaceholder: "ej., Södermalm",
        projectType: "Tipo de proyecto",
        selectProjectType: "Seleccionar tipo de proyecto",
        message: "Mensaje",
        messagePlaceholder: "Describe tu proyecto, cronograma y cualquier inquietud específica...",
        interestedIn: "Estoy interesado en:",
        quoteReview: "Revisión de presupuesto",
        planningSupport: "Apoyo en planificación",
        projectLead: "Gestión integral del proyecto",
        submit: "Enviar mensaje",
        submitting: "Enviando...",
        successTitle: "Mensaje enviado",
        successDescription: "Gracias por tu consulta. Me pondré en contacto pronto.",
      },
      projectTypes: [
        "Renovación de baño",
        "Renovación de cocina",
        "Remodelación completa de apartamento",
        "Mejoras de interiores",
        "Otro",
      ],
    },
    // Portfolio Preview
    portfolioPreview: {
      title: "Portfolio",
      subtitle: "Proyectos seleccionados que muestran la transformación y atención al detalle.",
      viewAll: "Ver todos los proyectos",
      before: "Antes",
      after: "Después",
    },
    // Portfolio Page
    portfolio: {
      pageTitle: "Portfolio",
      pageSubtitle: "Proyectos seleccionados que muestran nuestro enfoque en la gestión de proyectos de renovación. Cada caso de estudio incluye documentación de antes, durante y después.",
      keyMaterials: "Materiales clave",
      whatWeDid: "Lo que hicimos",
      outcome: "Resultado",
      ctaTitle: "¿Listo para comenzar tu proyecto?",
      ctaSubtitle: "Hablemos sobre tus objetivos de renovación y cómo puedo ayudar.",
      ctaButton: "Contáctanos",
      during: "Durante",
      projects: [
        {
          id: "bathroom-sodermalm",
          title: "Renovación de baño – Södermalm",
          location: "Södermalm, Estocolmo",
          scope: "Renovación completa de baño",
          duration: "4 semanas",
          budget: "150.000 - 200.000 SEK",
          materials: ["Mármol Carrara", "Tocador de roble", "Grifería de latón"],
          whatWeDid: [
            "Demolición completa del baño existente",
            "Nueva fontanería y electricidad",
            "Instalación de tocador de roble personalizado",
            "Instalación de azulejos de mármol con estrategia de corte simétrico",
            "Sistema de calefacción por suelo radiante",
          ],
          outcome: [
            "Entregado a tiempo y 8% por debajo del presupuesto",
            "Almacenamiento maximizado con soluciones personalizadas",
            "Estética nórdica limpia con materiales duraderos",
          ],
        },
        {
          id: "kitchen-ostermalm",
          title: "Renovación de cocina – Östermalm",
          location: "Östermalm, Estocolmo",
          scope: "Remodelación completa de cocina",
          duration: "6 semanas",
          budget: "280.000 - 350.000 SEK",
          materials: ["Encimeras de roble macizo", "Electrodomésticos integrados", "Salpicadero de cuarzo"],
          whatWeDid: [
            "Optimización de distribución para flujo de trabajo",
            "Diseño de gabinetes personalizados",
            "Abastecimiento de electrodomésticos premium",
            "Diseño de iluminación con LED bajo gabinetes",
            "Instalación de encimeras de roble macizo",
          ],
          outcome: [
            "Flujo de trabajo de cocina mejorado en un 40%",
            "12% de ahorro en abastecimiento de electrodomésticos",
            "Líneas limpias, espacio de encimera maximizado",
          ],
        },
        {
          id: "apartment-vasastan",
          title: "Remodelación completa de apartamento – Vasastan",
          location: "Vasastan, Estocolmo",
          scope: "Renovación completa de apartamento",
          duration: "12 semanas",
          budget: "800.000 - 1.000.000 SEK",
          materials: ["Pisos de roble", "Carpintería personalizada", "Piedra natural"],
          whatWeDid: [
            "Rediseño de planta abierta",
            "Actualización completa de electricidad y fontanería",
            "Nuevo piso de roble en toda la propiedad",
            "Soluciones de almacenamiento empotrado personalizadas",
            "Renovaciones de cocina y dos baños",
          ],
          outcome: [
            "Completado según cronograma con actualizaciones semanales",
            "Valor de propiedad aumentado estimado en 15%",
            "Espacio de vida escandinavo luminoso y abierto",
          ],
        },
      ],
    },
    // Services Page
    servicesPage: {
      title: "Servicios",
      subtitle: "Ejecución de proyectos centrada en el cliente con control estricto de costos y sólido apoyo en decisiones, entregado en colaboración con un contratista principal de confianza con décadas de experiencia.",
      differentiator: "\"El contratista ejecuta. Yo represento al cliente—costo, calidad y decisiones.\"",
      whatsIncluded: "Qué está incluido:",
      ctaTitle: "¿No estás seguro de qué servicio necesitas?",
      ctaSubtitle: "Reserva una llamada introductoria gratuita para discutir tu proyecto y encontrar el nivel de apoyo adecuado.",
      ctaButton: "Reservar llamada gratuita",
      items: [
        {
          title: "Gestión de proyectos (Centrada en el cliente)",
          description: "Liderar proyectos de renovación de principio a fin con supervisión completa.",
          ideal: "Ideal para renovaciones completas de baño, cocina o apartamento.",
          features: [
            "Coordinación completa del proyecto desde el inicio hasta la entrega",
            "Definición clara del alcance y gestión del cronograma",
            "Actualizaciones regulares de progreso y registros de decisiones",
            "Coordinación y supervisión de subcontratistas",
            "Control de calidad y lista final de pendientes",
            "Identificación y mitigación de riesgos",
          ],
        },
        {
          title: "Gestión de costos y gastos",
          description: "Presupuesto transparente con visibilidad de costos en tiempo real.",
          ideal: "Ideal para renovaciones conscientes del costo de cualquier tamaño.",
          features: [
            "Desglose detallado del presupuesto (pronóstico vs real)",
            "Comparación de opciones (escenarios A/B/C)",
            "Optimización de valor sin comprometer calidad",
            "Seguimiento de gastos con actualizaciones semanales",
            "Análisis de variaciones y optimización de costos",
            "Conciliación final de costos",
          ],
        },
        {
          title: "Control de presupuestos y facturas",
          description: "Protege tu inversión con validación experta de presupuestos.",
          ideal: "Ideal para validar propuestas de contratistas.",
          features: [
            "Revisión y comparación de presupuestos de subcontratistas",
            "Evaluación de claridad del alcance",
            "Evaluación de órdenes de cambio antes de la aprobación",
            "Validación de facturas vs trabajo acordado",
            "Verificación de pagos parciales",
            "Liquidación final de cuenta",
          ],
        },
        {
          title: "Diseño, distribución y planificación 3D",
          description: "Visualiza tu renovación antes de que comience la ejecución.",
          ideal: "Ideal para fases de planificación antes de contratar al contratista.",
          features: [
            "Optimización de distribución de cocina y baño",
            "Planificación de distribución de azulejos (simetría, cortes)",
            "Visualizaciones 3D para apoyo en decisiones",
            "Orientación en selección de materiales",
            "Colocación de iluminación y accesorios",
            "Análisis de utilización del espacio",
          ],
        },
      ],
    },
    // Footer
    footer: {
      tagline: "Claridad nórdica en bienes raíces y abastecimiento responsable. Ejecución de proyectos centrada en el cliente con control estricto de costos.",
      serviceArea: "Estocolmo - Suecia - El Mundo",
      quickLinks: "Enlaces rápidos",
      contact: "Contacto",
      copyright: "Todos los derechos reservados.",
    },
  },
} as const;

// Use a more flexible type that works for both languages
export type Translations = {
  nav: {
    services: string;
    portfolio: string;
    howItWorks: string;
    packages: string;
    contact: string;
    bookCall: string;
  };
  hero: {
    brand: string;
    tagline: string;
    description: string;
    ctaBook: string;
    ctaPortfolio: string;
  };
  services: {
    title: string;
    subtitle: string;
    differentiator: string;
    projectManagement: { title: string; points: readonly string[] };
    costManagement: { title: string; points: readonly string[] };
    quoteControl: { title: string; points: readonly string[] };
    designPlanning: { title: string; points: readonly string[] };
  };
  trust: {
    title: string;
    subtitle: string;
    contractor: { title: string; description: string };
    trackRecord: { title: string; description: string };
    customerFirst: { title: string; description: string };
  };
  process: {
    title: string;
    subtitle: string;
    steps: readonly { title: string; description: string }[];
  };
  packages: {
    title: string;
    subtitle: string;
    mostPopular: string;
    getStarted: string;
    quoteReview: { title: string; price: string; description: string; features: readonly string[] };
    designSupport: { title: string; price: string; description: string; features: readonly string[] };
    fullProject: { title: string; price: string; description: string; features: readonly string[] };
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    serviceArea: string;
    serviceAreaValue: string;
    form: {
      name: string;
      email: string;
      phone: string;
      location: string;
      locationPlaceholder: string;
      projectType: string;
      selectProjectType: string;
      message: string;
      messagePlaceholder: string;
      interestedIn: string;
      quoteReview: string;
      planningSupport: string;
      projectLead: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successDescription: string;
    };
    projectTypes: readonly string[];
  };
  portfolioPreview: {
    title: string;
    subtitle: string;
    viewAll: string;
    before: string;
    after: string;
  };
  portfolio: {
    pageTitle: string;
    pageSubtitle: string;
    keyMaterials: string;
    whatWeDid: string;
    outcome: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    during: string;
    projects: readonly {
      id: string;
      title: string;
      location: string;
      scope: string;
      duration: string;
      budget: string;
      materials: readonly string[];
      whatWeDid: readonly string[];
      outcome: readonly string[];
    }[];
  };
  servicesPage: {
    title: string;
    subtitle: string;
    differentiator: string;
    whatsIncluded: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    items: readonly {
      title: string;
      description: string;
      ideal: string;
      features: readonly string[];
    }[];
  };
  footer: {
    tagline: string;
    serviceArea: string;
    quickLinks: string;
    contact: string;
    copyright: string;
  };
};
