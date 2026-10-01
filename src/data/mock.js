import adCopiesMockup from '../assets/ad-copies-mockup.png';
import landingPageMockup from '../assets/landing-page-mockup.png';
import emailsMockup from '../assets/emails-mockup.png';
import brochuresMockup from '../assets/brochures-mockup.png';

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Process", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export const philosophySteps = [
  {
    id: 1,
    title: "Audit",
    description: "I dive deep into your mission, audience, and existing messaging to find what's working — and what's not.",
  },
  {
    id: 2,
    title: "Strategize",
    description: "I craft a tailored messaging strategy that aligns with your goals, audience, and emotional drivers.",
  },
  {
    id: 3,
    title: "Execute",
    description: "I deliver clear, persuasive copy — from websites to campaigns — designed to inspire action.",
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Ad Copies",
    description: "High-converting paid social media ad copy designed to drive donations and awareness for emergency relief campaigns.",
    imagePlaceholder: adCopiesMockup, 
    documentLink: "https://docs.google.com/document/d/1E4lH_mivFEhCbkpiSGn2JGCLj8JX4pyDjA8A6BhVmiQ/edit?tab=t.i2ijcevfv3wk#heading=h.xtla1j523o"
  },
  {
    id: 2,
    title: "Website Landing Page Copy",
    description: "Strategic, empathetic landing page copy structured to guide visitors from initial interest to taking meaningful action.",
    imagePlaceholder: landingPageMockup, 
    documentLink: "https://docs.google.com/document/d/1PiaC4NdjAdf3upc0SLtL3BprAS5vzZy_Y0coEy8AEA0/edit?tab=t.0"
  },
  {
    id: 3,
    title: "Email Campaigns",
    description: "Engaging email sequences focusing on donor retention, storytelling, and direct response fundraising.",
    imagePlaceholder: emailsMockup, 
    documentLink: "https://docs.google.com/document/d/1TjzHcgKZWpy1Hpw0bW_BNXNE7Mh5GZUT-V0CzkRI5IM/edit?tab=t.a5p4uoyin5ll"
  },
  {
    id: 4,
    title: "Brochures & Print Materials",
    description: "Comprehensive print copy that distills complex organizational missions into clear, digestible, and inspiring offline formats.",
    imagePlaceholder: brochuresMockup, 
    documentLink: "https://docs.google.com/document/d/1rR7-KI4v8IUUjDjTtu_zgzwJlqFkaa58ZqCkyNq6XDg/edit?tab=t.8lahfhfiags0"
  },
  {
    id: 5,
    title: "Social Media Ads",
    description: "High-ROAS paid ad copy focusing on urgency, empathy, and clear calls-to-action for global emergency and empowerment campaigns.",
    imagePlaceholder: "/src/assets/ads-mockup.png", 
    documentLink: "https://docs.google.com/document/d/1UDrwzl-O32S3LiT-3Kmj2GNOzFfrJuf1mdu20_qMVxs/edit?tab=t.xqpzf4osfcmw"
  }
];