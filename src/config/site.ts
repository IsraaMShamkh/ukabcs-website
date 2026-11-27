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
  // Applications start on the UKABCS Portal (Israa, 27 Nov 2026). ClientFlow keeps only contact, inquiry,
  // subscription, membership, donation and volunteer forms.
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
    innoFundGrantForm: "https://portal.ukabcs.co.uk/apply/innofund-call-01-2026",

    // 5. Grants — Digital Campus Transformation
    digitalCampusUniversityForm: "https://portal.ukabcs.co.uk/apply/digital-campus-transformation-grant",
    digitalCampusIndustrialForm: "https://portal.ukabcs.co.uk/apply/digital-campus-transformation-grant",

    // 6. Grants — Graduation Projects
    graduationProjectGrantForm: "https://portal.ukabcs.co.uk/apply/graduation-project-call-02-2026-27",
    graduationProjectFacultyForm: "https://portal.ukabcs.co.uk/apply/graduation-project-call-02-2026-27",

    // 7. International Exchange & Mobility
    outboundMobilityCandidateForm: "https://portal.ukabcs.co.uk/apply/mobility-outbound-exchange",
    incomingMobilityParticipantForm: "https://portal.ukabcs.co.uk/apply/mobility-incoming-exchange",

    // 8. Conferences & Publications Support
    publicationsConferencesSupportForm: "https://portal.ukabcs.co.uk/calls?programme=publications",
    conferenceRegistrationFundingForm: "https://portal.ukabcs.co.uk/apply/conference-participation-grant-cairo",
    conferenceTravelAccommodationForm: "https://portal.ukabcs.co.uk/apply/international-conference-travel-2026",
    publicationFeeWaiverForm: "https://portal.ukabcs.co.uk/apply/open-access-publication-grant-ijbtcs",

    // 9. Women Researchers & KidCamp Support
    womenResearchersSupportForm: "https://portal.ukabcs.co.uk/calls?programme=women",
    kidCampRegistrationForm: "https://portal.ukabcs.co.uk/apply/kidcamp-researcher-mothers",

    // 10. Educational & Software Support
    eventsEducationalSupportForm: "https://portal.ukabcs.co.uk/calls?programme=events",
    scientificSoftwareDevSupportForm: "https://portal.ukabcs.co.uk/calls?programme=software",
    volunteerSupervisorForm: "https://clientflow-crm.com/f/ukabcs/global/ukabcs-volunteer-academic-supervisor-application",
    volunteerWorkshopForm: "https://clientflow-crm.com/f/ukabcs/global/ukabcs-volunteer-workshop-instructor-programme-application",
    volunteerMentorForm: "https://clientflow-crm.com/f/ukabcs/global/ukabcs-volunteer-mentor-application-form",

    // 11. Copyright Registration for Innovation: applications happen in the UKABCS Portal
    ipInnovationRequestForm: "https://portal.ukabcs.co.uk/apply/copyright",
  },

  // Certificate lookups for /verify, served by the UKABCS Portal.
  certificateApi: "https://portal.ukabcs.co.uk/api/certificates",

  // Copyright Registration applications; add ?service=<id> to preselect a service.
  portalCopyrightApply: "https://portal.ukabcs.co.uk/apply/copyright",

  // Main Header Navigation (Ordered per Master Plan Section 3)
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Programmes & Grants",
      href: "/programmes-grants",
      children: [
        { label: "Overview & Open Calls", href: "/programmes-grants", description: "Explore competitive peer-reviewed research grants" },
        { label: "Funded Projects", href: "/funded-projects", description: "Universities and labs we have already supported" },
        { label: "Mobility Exchange", href: "/mobility-exchange", description: "International exchange for students, researchers and faculty" },
        { label: "Software Development Support", href: "/scientific-software", description: "Grants & cloud compute for computational tools" },
        { label: "Copyright Registration for Innovation", href: "/copyright-registration", description: "Verifiable copyright certificates, novelty reports and commercialisation" },
        { label: "Events & Educational Support", href: "/educational-support", description: "Free courses, workshops, audiobooks, and mentorship" },
        { label: "Publications & Conferences", href: "/publications", description: "APC waivers and international conference travel support" },
        { label: "Women Researchers Support", href: "/women-in-science", description: "Targeted research funding and conference childcare assistance" },
      ],
    },
    {
      label: "Collaborate With Us",
      href: "/collaborate",
      children: [
        { label: "University Partner Programme", href: "/news/ukabcs-university-partner-programme", description: "What the programme is and how it works" },
        { label: "Academic Collaboration", href: "/collaborate", description: "Partnerships with universities and research institutes" },
        { label: "Industrial Collaboration", href: "/partnerships", description: "Companies that support our programmes" },
        { label: "Volunteer", href: "/volunteer", description: "Give your time as a mentor, reviewer or expert" },
        { label: "Memberships", href: "/memberships", description: "Join UKABCS as an individual member" },
      ],
    },
    { label: "News", href: "/news" },
    {
      label: "About Us",
      href: "/about-us",
      children: [
        { label: "About UKABCS", href: "/about-us", description: "Our mission, story and team" },
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
