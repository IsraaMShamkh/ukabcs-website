export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  eligibility: string;
  popular?: boolean;
  shortDescription: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface MembershipStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface MembershipFAQ {
  question: string;
  answer: string;
}

export const membershipConfig = {
  hero: {
    eyebrow: "Global Academic Society",
    title: "UKABCS Academic Membership",
    description: "Connect with leading researchers, discover verified partner offers, and participate in peer-reviewed grant committees worldwide.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=2200&auto=format&fit=crop",
  },

  whatItMeans: {
    title: "What UKABCS Membership Means for Your Research",
    subtitle: "Empowering computational biologists, chemoinformaticians, and life science researchers with real infrastructure and international recognition.",
    paragraphs: [
      "The UK Organisation for Biotechnology and Computational Science (UKABCS) is a UK-registered non-profit academic society dedicated to advancing computational biology and biotechnology research.",
      "Membership provides verified access to shared cloud computing infrastructure, exclusive partner discounts on specialized bioinformatics software, and eligibility for competitive research grants and conference travel awards.",
      "Our members actively contribute to peer-review boards, shape grant funding criteria, and collaborate across international university networks."
    ],
    highlights: [
      "Direct eligibility for UKABCS peer-reviewed grant calls",
      "Verified partner discounts for publishing and conference services",
      "Exclusive partner discounts on cloud compute & specialized tools",
      "Official academic society membership certificate and digital credential"
    ]
  },

  sharedInfrastructure: {
    title: "Shared Academic Infrastructure & Compute Access",
    subtitle: "High-performance compute allocations and verified tools for member research groups.",
    items: [
      {
        title: "High-Performance Compute",
        description: "Access dedicated GPU cluster allocations and Google Colab enterprise instances for molecular dynamics simulations and virtual screening."
      },
      {
        title: "Bioinformatics Software Suite",
        description: "Verified computational tools, cheminformatics databases, and automated pipeline scripts tailored for life science research."
      },
      {
        title: "ClientFlow CRM Research Management",
        description: "Streamlined research project tracking, dataset hosting, and team collaboration tools."
      }
    ]
  },

  steps: [
    {
      stepNumber: 1,
      title: "Select Membership Tier",
      description: "Choose the tier that matches your academic status: Student, Professional Researcher, Institution/Lab, or Fellow."
    },
    {
      stepNumber: 2,
      title: "Complete Academic Verification",
      description: "Fill out the secure verification form with your university email or institutional affiliation."
    },
    {
      stepNumber: 3,
      title: "Receive Credentials & Card",
      description: "Get your official UKABCS Membership ID card, digital credentials, and instant access to partner benefits."
    },
    {
      stepNumber: 4,
      title: "Access Infrastructure & Grants",
      description: "Access current partner offers, apply for open grant calls, and stay informed about member-only announcements."
    }
  ] as MembershipStep[],

  tiers: [
    {
      id: "student",
      name: "Student Member",
      price: "£100",
      billingPeriod: "Annual membership",
      eligibility: "BSc / MSc / PhD Students",
      shortDescription: "Essential access for undergraduate and postgraduate students in life sciences.",
      features: [
        "Access to student grant opportunities & graduation project support",
        "Discounts on certified bioinformatics training courses",
        "Official Student Membership Certificate",
        "Newsletter & call alerts subscription"
      ],
      ctaLabel: "Apply for Student Membership",
      ctaHref: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form"
    },
    {
      id: "professional",
      name: "Professional Researcher",
      price: "£300",
      billingPeriod: "Annual Renewal",
      popular: true,
      eligibility: "Postdocs, PIs, & University Lecturers",
      shortDescription: "For individual academic researchers, postdocs, and university faculty members.",
      features: [
        "Priority eligibility for UKABCS Capacity Building & Research Grants",
        "Partner discounts on eligible publishing services",
        "Partner discounts on GPU HPC compute credits",
        "Eligibility to join the Peer Review & Grant Assessment Board",
        "Official Member Credential & Digital Badge"
      ],
      ctaLabel: "Join as Professional Member",
      ctaHref: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form"
    },
    {
      id: "institution",
      name: "Institution / Lab Member",
      price: "£500",
      billingPeriod: "Annual Renewal",
      eligibility: "Research Groups, Labs, & Departments",
      shortDescription: "Comprehensive membership for entire university research groups and lab teams.",
      features: [
        "Coverage for up to 10 lab team members & students",
        "Institutional eligibility for UKABCS £32,000 Capacity Building Grants",
        "Dedicated cloud compute cluster allocation",
        "Partner discounts for eligible publishing and conference services",
        "Institutional recognition on UKABCS portal"
      ],
      ctaLabel: "Join as Institution / Lab",
      ctaHref: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form"
    },
    {
      id: "fellow",
      name: "UKABCS Fellow",
      price: "By nomination",
      billingPeriod: "Honorary recognition",
      eligibility: "Distinguished senior academics and scientific leaders",
      shortDescription: "An honorary recognition awarded by UKABCS; it is not a paid membership tier.",
      features: [
        "Direct seat on the UKABCS Scientific Advisory Board",
        "Lead reviewer status for major international grant allocations",
        "Scientific recognition and formal UKABCS fellowship status",
        "Invitation to contribute to advisory and review activities",
        "No membership fee or commercial partner entitlement"
      ],
      ctaLabel: "Learn about Fellowship",
      ctaHref: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form"
    }
  ] as MembershipTier[],

  peerReviewBoard: {
    title: "Scientific Integrity & Peer Review Board",
    subtitle: "Join our international panel of academic reviewers shaping computational biology research.",
    description: "UKABCS members are invited to serve on competitive grant assessment panels and peer-review editorial boards. Reviewers receive official accreditation, institutional recognition, and priority consideration for collaborative research funding.",
    ctaText: "Apply for Peer Review Board",
    ctaHref: "https://clientflow-crm.com/f/ukabcs/ukabcs-general-support/ukabcs-general-support-form"
  },

  faqs: [
    {
      question: "Who is eligible to become a UKABCS member?",
      answer: "Membership is open to researchers, university faculty, PhD candidates, undergraduate students, and industry professionals in computational biology, bioinformatics, chemoinformatics, biotechnology, and related life sciences worldwide."
    },
    {
      question: "How do I access partner discounts and HPC credits?",
      answer: "Once your membership is verified, you can log in or use your unique UKABCS Member ID to claim partner offers, compute vouchers, and software discounts listed in the Member Benefits Directory."
    },
    {
      question: "What are the renewal terms for annual memberships?",
      answer: "Professional, Institution, and Fellow memberships are billed annually. Membership auto-renewal can be managed anytime via your account or by contacting the UKABCS Secretariat."
    },
    {
      question: "How do partner publishing discounts work?",
      answer: "Active members can use the current verified offers listed in the Member Benefits Marketplace. Discount availability and any time-limited partner offer are announced separately by UKABCS."
    }
  ] as MembershipFAQ[]
};
