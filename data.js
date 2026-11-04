// Job families taken from the role slides (2–8) of "Careers within Virgin Money" (FY25).
// Each skill carries weights (1–3) for the job families it matches.

const CAREERS_URL = "https://careers.virginmoney.com/our-jobs";

const ROLES = {
  cs:   { title: "Customer Service and Administration", tagline: "Customer champions",
          slide: "slides/slide-2.jpg",
          roleTypes: "Branch staff, Contact Centre Agent, Telephone Account Manager, Fraud Agent, Administration, Case Consultant, Customer Service Adviser" },
  bank: { title: "Personal and Business Banking", tagline: "Relationship creators",
          slide: "slides/slide-3.jpg",
          roleTypes: "Banking Advisor, Relationship Manager, Business Development Director, Mortgage Advisor, Small Business Manager" },
  mkt:  { title: "Brand and Marketing", tagline: "Marketing mavericks",
          slide: "slides/slide-4.jpg",
          roleTypes: "Marketing, Customer Value, Digital Content, Digital Campaigns, Customer Analytics, Innovation, PR and Brand" },
  tech: { title: "Technology, Digital & Business Change", tagline: "Tech experts and change masters",
          slide: "slides/slide-5.jpg",
          roleTypes: "Information Security, IT Development and Engineering, Project Management, Architect, Business Change Analysis" },
  corp: { title: "Corporate Development, Legal & Governance", tagline: "Strategy experts and legal pioneers",
          slide: "slides/slide-6.jpg",
          roleTypes: "Strategy, Legal, Corporate Affairs, Media and Investor Relations, Compliance" },
  hr:   { title: "HR and Internal Communications", tagline: "Culture creators and storytellers",
          slide: "slides/slide-7.jpg",
          roleTypes: "Organisational Development, Internal Communication, Rewards & Pensions, Employee Engagement, Leadership Development, Resourcing" },
  risk: { title: "Risk, Audit and Enterprise Assurance", tagline: "Keeping us safe",
          slide: "slides/slide-8.jpg",
          roleTypes: "Balance Sheet and Liquidity Risk, Business Risk, Enterprise Risk Management, Financial Crime & Fraud, Data Protection, Internal Audit, Enterprise Incidents" }
};

const SKILLS = [
  { id: "care",     icon: "💬", label: "Helping people",               w: { cs: 3, bank: 2, hr: 1 } },
  { id: "talk",     icon: "🗣️", label: "Talking & listening",          w: { cs: 2, bank: 2, hr: 2, corp: 1 } },
  { id: "relate",   icon: "🤝", label: "Building relationships",       w: { bank: 3, corp: 1, hr: 1 } },
  { id: "organise", icon: "🗂️", label: "Being organised",              w: { cs: 3, hr: 1, risk: 1 } },
  { id: "money",    icon: "💷", label: "Working with numbers & money", w: { bank: 3, risk: 2, corp: 1 } },
  { id: "create",   icon: "💡", label: "Creative ideas",               w: { mkt: 3, tech: 1, corp: 1 } },
  { id: "write",    icon: "✍️", label: "Writing & storytelling",       w: { hr: 3, mkt: 2, corp: 1 } },
  { id: "design",   icon: "🎨", label: "Design & digital content",     w: { mkt: 3, tech: 1 } },
  { id: "code",     icon: "💻", label: "Coding & computers",           w: { tech: 3 } },
  { id: "solve",    icon: "🧩", label: "Solving problems",             w: { tech: 3, risk: 1, cs: 1 } },
  { id: "data",     icon: "📊", label: "Analysing data",               w: { risk: 2, mkt: 2, tech: 1 } },
  { id: "detail",   icon: "🔍", label: "Attention to detail",          w: { risk: 3, corp: 2, cs: 1 } },
  { id: "rules",    icon: "⚖️", label: "Rules, law & fairness",        w: { corp: 3, risk: 2 } },
  { id: "detect",   icon: "🕵️", label: "Investigating & spotting fraud", w: { risk: 3, cs: 1 } },
  { id: "secure",   icon: "🔒", label: "Keeping information safe",     w: { tech: 2, risk: 2 } },
  { id: "plan",     icon: "📅", label: "Planning projects",            w: { tech: 2, corp: 1, hr: 1 } },
  { id: "lead",     icon: "🌟", label: "Leading & motivating others",  w: { hr: 2, bank: 1, corp: 1 } },
  { id: "grow",     icon: "🌱", label: "Helping others learn & grow",  w: { hr: 3 } },
  { id: "persuade", icon: "📣", label: "Persuading & presenting",      w: { corp: 2, bank: 2, mkt: 2 } },
  { id: "future",   icon: "🔭", label: "Thinking ahead & strategy",    w: { corp: 3, risk: 1, tech: 1 } }
];

const MAX_PICKS = 5;
