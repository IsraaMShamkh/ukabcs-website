export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const siteConfig = {
  shortName: "UKABCS",
  publicName: "UK Organisation for Biotechnology and Computational Science",
  legalName: "UK Organization for Biotechnology and Computational Science (UKABCS) Ltd",
  // `fullName` remains as a compatibility alias while pages move to publicName.
  name: "UKABCS",
  fullName: "UK Organisation for Biotechnology and Computational Science",
  legalStatus: "UK Registered Non-Profit Academic Society (Incorporated in 2025)",
  url: "https://www.ukabcs.co.uk",
  description: "A UK-registered non-profit academic society dedicated to supporting researchers, peer-reviewed grant funding, and advancing computational biology, bioinformatics, and chemoinformatics worldwide.",
  contactEmail: "info@ukabcs.co.uk",
  
  // ClientFlow CRM endpoints and external form links
  clientFlow: {
    generalSupportForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form",
    contactUsForm: "https://clientflow-crm.com/f/ukabcs/contact/contact-us-form",
    membershipForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form",
    donationLink: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form",
    grantApplicationForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form",
    partnershipForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form",
    newsletterEndpoint: "https://clientflow-crm.com/f/ukabcs/newsletter/subscribe-form",
  },

  // Main Header Navigation (Ordered per Master Plan Section 3)
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Memberships", href: "/memberships" },
    {
      label: "Programmes & Grants",
      href: "/programmes-grants",
      children: [
        { label: "Overview & Open Calls", href: "/programmes-grants", description: "Explore competitive peer-reviewed research grants" },
        { label: "Software Development Support", href: "/scientific-software", description: "Grants & cloud compute for computational tools" },
        { label: "Events & Educational Support", href: "/educational-support", description: "Free courses, workshops, audiobooks, and mentorship" },
        { label: "Publications & Conferences", href: "/publications", description: "APC waivers and international conference travel support" },
        { label: "Women Researchers Support", href: "/women-in-science", description: "Targeted research funding and conference childcare assistance" },
      ],
    },
    { label: "Funded Projects", href: "/funded-projects" },
    { label: "News", href: "/news" },
    { label: "Partnerships", href: "/partnerships" },
    {
      label: "Governance",
      href: "/governance",
      children: [
        { label: "Board of Trustees & Leadership", href: "/governance", description: "Board of Trustees, Directors, and specialised committees" },
        { label: "Transparency & Reports", href: "/transparency", description: "Grant-making rules, ethical policies, and audits" },
        { label: "Policies & Legal Information", href: "/legal", description: "Privacy policy, terms of use, and GDPR compliance" },
      ],
    },
  ] as NavItem[],

  // Key stats
  stats: [
    { value: "14+", label: "Funded Universities & Labs" },
    { value: "£417K+", label: "Research & Grant Funding" },
    { value: "5+", label: "Active Grant Programmes" },
    { value: "100%", label: "Peer-Reviewed Transparency" },
  ],
};
