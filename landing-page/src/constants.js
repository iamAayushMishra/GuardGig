// Application constants
export const APP_NAME = 'GuardGig';
export const APP_SLOGAN = 'Income Protection When It Matters Most';
export const APP_DESCRIPTION = 'AI-Powered Parametric Income Protection for Gig Workers';

// URLs
export const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:3000';
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
export const WEBSITE_URL = 'https://guardigig.com';

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/TeamUpsurge/GuardGig',
  linkedin: 'https://linkedin.com/company/guardigig',
  twitter: 'https://twitter.com/TeamGuardGig',
  email: 'hello@guardigig.com',
};

// Navigation Links
export const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
];

// Problem Data
export const PROBLEMS = [
  {
    id: 1,
    title: 'Weather Disruptions',
    description: 'Heavy rain, fog, or extreme heat reduces order volume by 40-50%',
    impact: '₹6,000-8,000 weekly loss',
    icon: 'cloud-rain',
    color: 'blue',
  },
  {
    id: 2,
    title: 'Air Quality Crisis',
    description: 'AQI > 250 causes fewer deliveries and zone restrictions',
    impact: '₹5,000-7,000 weekly loss',
    icon: 'smog',
    color: 'orange',
  },
  {
    id: 3,
    title: 'App Downtime',
    description: 'App crashes or server issues cut access to customers',
    impact: '₹4,000-6,000 weekly loss',
    icon: 'wifi-off',
    color: 'purple',
  },
  {
    id: 4,
    title: 'Social Disruptions',
    description: 'Shutdowns, bandhs, or other restrictions block operations',
    impact: '₹7,000-9,000 weekly loss',
    icon: 'alert-triangle',
    color: 'green',
  },
];

// Solutions/Features
export const SOLUTION_FEATURES = [
  {
    id: 1,
    title: 'Zero-Touch Claims',
    description: 'No paperwork. Payouts triggered automatically when conditions are met.',
    icon: 'zap',
  },
  {
    id: 2,
    title: 'Weekly Pricing',
    description: 'Pay what you can afford. ₹49-99 per week aligned with your earnings.',
    icon: 'calendar',
  },
  {
    id: 3,
    title: 'AI Fraud Detection',
    description: 'Smart algorithms detect fraud patterns. Protect all honest users.',
    icon: 'shield',
  },
];

// Parametric Triggers
export const TRIGGERS = [
  {
    id: 1,
    title: 'Rainfall Trigger',
    description: 'Heavy rain > 25mm in 24 hours',
    payout: '₹500-1,000',
    threshold: 'Weather API data',
  },
  {
    id: 2,
    title: 'AQI Trigger',
    description: 'Air Quality Index > 250',
    payout: '₹500-1,000',
    threshold: 'AQI API data',
  },
  {
    id: 3,
    title: 'Downtime Trigger',
    description: 'App unavailable > 30 minutes',
    payout: '₹200-500',
    threshold: 'Status monitoring',
  },
  {
    id: 4,
    title: 'Zone Closure Trigger',
    description: 'Zone restricted/closed for > 2 hours',
    payout: '₹300-600',
    threshold: 'GPS + news API',
  },
  {
    id: 5,
    title: 'Order Drop Trigger',
    description: 'Orders drop > 40% vs baseline',
    payout: '₹400-800',
    threshold: 'App API integration',
  },
  {
    id: 6,
    title: 'Pollution Spike Trigger',
    description: 'PM2.5 level increases > 150%',
    payout: '₹300-700',
    threshold: 'Environmental API',
  },
];

// How It Works Steps
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Sign Up',
    description: 'Register with phone number. KYC takes 2 minutes.',
    time: '2 min',
  },
  {
    step: 2,
    title: 'Choose Plan',
    description: 'Select your weekly coverage. ₹49-99 based on protection level.',
    time: '1 min',
  },
  {
    step: 3,
    title: 'Stay Protected',
    description: 'We monitor conditions 24/7. No action needed from you.',
    time: 'Always on',
  },
  {
    step: 4,
    title: 'Get Paid',
    description: 'When trigger occurs, payout automatically to your UPI within 1 day.',
    time: 'T+1',
  },
];

// Metrics/KPIs
export const METRICS = [
  {
    value: '50,000+',
    label: 'Gig Workers Onboarded',
    icon: 'users',
  },
  {
    value: '₹125 Cr+',
    label: 'Payouts Processed',
    icon: 'trending-up',
  },
  {
    value: '₹2,500 Cr+',
    label: 'Market Opportunity',
    icon: 'pie-chart',
  },
  {
    value: '1 Day',
    label: 'Avg Payout Time',
    icon: 'zap',
  },
];

// Tech Stack
export const TECH_STACK = [
  {
    layer: 'Frontend',
    technologies: [
      { name: 'React 18', description: 'UI Framework' },
      { name: 'TypeScript', description: 'Type Safety' },
      { name: 'Tailwind CSS', description: 'Styling' },
      { name: 'Framer Motion', description: 'Animations' },
    ],
  },
  {
    layer: 'Backend',
    technologies: [
      { name: 'Node.js', description: 'Runtime' },
      { name: 'Express', description: 'API Framework' },
      { name: 'MongoDB', description: 'Database' },
      { name: 'JWT', description: 'Authentication' },
    ],
  },
  {
    layer: 'ML/AI',
    technologies: [
      { name: 'Python', description: 'Language' },
      { name: 'Scikit-learn', description: 'ML Library' },
      { name: 'XGBoost', description: 'Premium Prediction' },
      { name: 'Flask', description: 'API Server' },
    ],
  },
  {
    layer: 'DevOps',
    technologies: [
      { name: 'Docker', description: 'Containerization' },
      { name: 'GitHub Actions', description: 'CI/CD' },
      { name: 'AWS', description: 'Cloud Hosting' },
      { name: 'Redis', description: 'Caching' },
    ],
  },
];

// Roadmap
export const ROADMAP = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'completed',
    color: 'green',
    dates: 'Mar 18-31',
    deliverables: [
      'Landing page & marketing site',
      'User registration & KYC flow',
      'Policy management system',
      'Basic API endpoints',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Automation',
    status: 'in-progress',
    color: 'blue',
    dates: 'Apr 1-14',
    deliverables: [
      'Real-time trigger monitoring',
      'AI premium calculator',
      'Automated claim processing',
      'Payment gateway integration',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    status: 'upcoming',
    color: 'gray',
    dates: 'Apr 15-30',
    deliverables: [
      'Multi-state expansion',
      'Advanced fraud detection',
      'Analytics dashboard',
      'Admin panel',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Optimize',
    status: 'planned',
    color: 'gray',
    dates: 'May 1+',
    deliverables: [
      'Performance optimization',
      'Regional customization',
      'Insurance partner APIs',
      'Production hardening',
    ],
  },
];

// Trust Indicators
export const TRUST_INDICATORS = [
  {
    stat: '95%',
    label: 'Fraud Detection Rate',
    icon: 'shield-check',
  },
  {
    stat: '<1s',
    label: 'Claim Processing Speed',
    icon: 'zap',
  },
  {
    stat: '100%',
    label: 'Claim Transparency',
    icon: 'eye',
  },
];

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: 'How fast is the payout?',
    answer: 'Payouts are processed within 24 hours (T+1) directly to your UPI account. Most payouts arrive within 12 hours.',
  },
  {
    question: 'Do I need a credit card?',
    answer: 'No credit card required. You can pay ₹49-99 per week from your earnings directly. You can start with our free trial.',
  },
  {
    question: 'What if I cancel?',
    answer: 'You can cancel anytime with no penalties. If you cancel mid-week, you get a prorated refund in 2-3 days.',
  },
  {
    question: 'How many claims can I make?',
    answer: 'Unlimited! If multiple triggers occur in a week, each triggers a separate payout. No claim limits whatsoever.',
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes! We use bank-level encryption, ISO 27001 compliance, and never share your data with third parties.',
  },
  {
    question: 'How do I know if I qualify?',
    answer: 'You need to be an active delivery partner for Zomato, Swiggy, or other gig platforms. Registration takes just 2 minutes.',
  },
];

// CTA Buttons
export const CTA_BUTTONS = {
  primary: {
    label: 'Start Free Trial',
    action: 'signup',
  },
  secondary: {
    label: 'Watch Demo',
    action: 'demo',
  },
};

// Footer Links
export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: '/contact' },
    { label: 'Support', href: '/support' },
  ],
};

// Status Indicator
export const STATUS_INDICATOR = {
  status: 'operational',
  message: 'All Systems Operational',
  color: 'green',
};

export default {
  APP_NAME,
  APP_SLOGAN,
  APP_DESCRIPTION,
  APP_URL,
  API_URL,
  WEBSITE_URL,
  SOCIAL_LINKS,
  NAV_LINKS,
  PROBLEMS,
  SOLUTION_FEATURES,
  TRIGGERS,
  HOW_IT_WORKS,
  METRICS,
  TECH_STACK,
  ROADMAP,
  TRUST_INDICATORS,
  FAQ_ITEMS,
  CTA_BUTTONS,
  FOOTER_LINKS,
  STATUS_INDICATOR,
};
