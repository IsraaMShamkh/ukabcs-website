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
  contactEmail: "support@ukabcs.co.uk",
  
  // ClientFlow CRM endpoints and external form links (29 Official Forms)
  clientFlow: {
    // 1. General & Core Forms
    generalSupportForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form",
    contactUsForm: "https://clientflow-crm.com/f/ukabcs/contact/contact-us-form",
    membershipForm: "https://clientflow-crm.com/f/ukabcs/membership/ukabcs-membership-application-form",
    subscriptionForm: "https://clientflow-crm.com/f/ukabcs/subscription/subscription-form",

    // 2. Feedback, Suggestions & Inquiries
    generalInquiryForm: "https://clientflow-crm.com/f/ukabcs/complains-suggestions-inquiries/general-inquiry-form",
    suggestionsIdeasForm: "https://clientflow-crm.com/f/ukabcs/complains-suggestions-inquiries/suggestions-ideas-form",
    feedbackComplaintForm: "https://clientflow-crm.com/f/ukabcs/complains-suggestions-inquiries/feedback-complaint-form",

    // 3. Partnerships & Contributions
    partnershipContributionForm: "https://clientflow-crm.com/f/ukabcs/partnership-donation/ukabcs-partnership-contribution-application-form",
    partnershipDonationForm: "https://clientflow-crm.com/f/ukabcs/partnership-donations/partnership-and-donation-form",
    impactFundDonationForm: "https://clientflow-crm.com/f/ukabcs/donations/ukabcs-global-scientific-impact-fund",

    // 4. Grants — InnoFund
    innoFundGrantForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-innofund-grant/ukabcs-innofund-grant",

    // 5. Grants — Digital Campus Transformation
    digitalCampusUniversityForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-digital-campus-transformation-grant/ukabcs-digital-campus-university-transformation-grant-registration",
    digitalCampusIndustrialForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-digital-campus-transformation-grant/ukabcs-industrial-company-grant-application",

    // 6. Grants — Graduation Projects
    graduationProjectGrantForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-graduation-project-grant/ukabcs-graduation-project-grant",
    graduationProjectFacultyForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-graduation-project-grant/ukabcs-graduation-project-grant-faculty-interest-form",

    // 7. International Exchange & Mobility
    outboundMobilityCandidateForm: "https://clientflow-crm.com/f/ukabcs/outbound-inbound-international-exchange-mobility/outbound-candidate-application-form",
    incomingMobilityParticipantForm: "https://clientflow-crm.com/f/ukabcs/outbound-inbound-international-exchange-mobility/incoming-international-participant-form",

    // 8. Conferences & Publications Support
    publicationsConferencesSupportForm: "https://clientflow-crm.com/f/ukabcs/publications-conferences-support/publications-conferences-support-form",
    conferenceRegistrationFundingForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-conference-support-publication-fee-waiver-program/conference-registration-fee-funding-application",
    conferenceTravelAccommodationForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-conference-support-publication-fee-waiver-program/ukabcs-support-program-track-2-travel-accommodation-support",
    publicationFeeWaiverForm: "https://clientflow-crm.com/f/ukabcs/ukabcs-conference-support-publication-fee-waiver-program/ukabcs-support-program-track-3-publication-fee-waiver-december-2026",

    // 9. Women Researchers & KidCamp Support
    womenResearchersSupportForm: "https://clientflow-crm.com/f/ukabcs/women-researchers-support/women-researchers-support-form",
    kidCampRegistrationForm: "https://clientflow-crm.com/f/ukabcs/kidcamp-registration-supporting-researcher-mothers/kidcamp-registration",

    // 10. Educational & Software Support
    eventsEducationalSupportForm: "https://clientflow-crm.com/f/ukabcs/events-educational-support/events-educational-support-request-form",
    scientificSoftwareDevSupportForm: "https://clientflow-crm.com/f/ukabcs/scientific-software-development-support/scientific-software-development-support-form",
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
