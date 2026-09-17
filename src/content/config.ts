import { defineCollection, z } from 'astro:content';

const benefitsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    partnerName: z.string(),
    logo: z.string().optional(),
    website: z.string().optional(),
    category: z.enum(['Computing', 'Services', 'Publishing', 'Software', 'Training']),
    shortDescription: z.string(),
    services: z.array(z.string()).default([]),
    discountValue: z.string(),
    discountType: z.string().default('Percentage'),
    eligibility: z.string().default('Active UKABCS Members'),
    terms: z.string().optional(),
    validFrom: z.string().optional(),
    validUntil: z.string().optional(),
    partnershipSlug: z.string().optional(),
    verified: z.boolean().default(false),
  }),
});

const callsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    programme: z.string(),
    kind: z.enum(['journal', 'conference', 'education', 'software', 'grant']),
    status: z.enum(['open', 'upcoming', 'closed']).default('closed'),
    language: z.string().default('en'),
    summary: z.string(),
    opensAt: z.string().optional(),
    closesAt: z.string().optional(),
    eligibility: z.string().optional(),
    budget: z.string().optional(),
    detailSlug: z.string().optional(),
    applicationUrl: z.string().optional(),
    featuredImage: z.string().optional(),
    attachments: z.array(z.object({
      title: z.string(),
      format: z.string(),
      size: z.string(),
      url: z.string(),
    })).default([]),
  }),
});

const fundedProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    awardYear: z.number().optional(),
    year: z.number().optional(),
    programmeYear: z.number().optional(),
    institution: z.string(),
    country: z.string(),
    faculty: z.string().optional(),
    mainPI: z.string().optional(),
    grantType: z.string(),
    datePublished: z.string().optional(),
    summary: z.string().optional(),
    description: z.string().optional(),
    coverage: z.string().optional(),
    budget: z.string().optional(),
    outcomes: z.string().optional(),
    featuredImage: z.string().optional(),
    image: z.string().optional(),
    sourceUrl: z.string().optional(),
    verificationStatus: z.enum(['VERIFIED', 'PENDING_APPROVAL']).default('VERIFIED'),
    featured: z.boolean().default(false),
  }),
});

const partnershipsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    partnerName: z.string().optional(),
    partnerLogo: z.string().optional(),
    companyLocation: z.string().optional(),
    companyProfile: z.string().optional(),
    specialisation: z.string().optional(),
    services: z.array(z.string()).default([]),
    contributionType: z.string().optional(),
    contributionValue: z.string().optional(),
    value: z.string().optional(),
    type: z.string().optional(),
    agreementDate: z.string().optional(),
    directorName: z.string().optional(),
    directorImage: z.string().optional(),
    ukabcsRepresentative: z.string().optional(),
    ukabcsRepresentativeImage: z.string().optional(),
    memberOffer: z.string().optional(),
    offerTerms: z.string().optional(),
    acknowledgements: z.string().optional(),
    featuredImage: z.string().optional(),
    image: z.string().optional(),
    sourceUrl: z.string().optional(),
    description: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    contentType: z.enum(['research-article', 'news', 'open-call', 'announcement']).default('news'),
    category: z.string().optional(),
    datePublished: z.string(),
    status: z.string().default('published'),
    author: z.string().default('UKABCS Secretariat'),
    summary: z.string().optional(),
    description: z.string().optional(),
    featuredImage: z.string().optional(),
    image: z.string().optional(),
    sourceUrl: z.string().optional(),
    relatedItems: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    attachments: z.array(z.object({
      title: z.string(),
      format: z.string(),
      size: z.string(),
      url: z.string(),
    })).default([]),
  }),
});

const governanceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    country: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    photo: z.string().optional(),
    order: z.number().default(99),
    active: z.boolean().default(true),
    sourceUrl: z.string().optional(),
  }),
});

const policiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    summary: z.string(),
    effectiveDate: z.string().optional(),
    reviewDate: z.string().optional(),
    download: z.string().optional(),
    publicationStatus: z.enum(['PUBLISHED', 'PENDING_LEGAL_REVIEW']).default('PUBLISHED'),
  }),
});

export const collections = {
  'benefits': benefitsCollection,
  'calls': callsCollection,
  'funded-projects': fundedProjectsCollection,
  'partnerships': partnershipsCollection,
  'news': newsCollection,
  'governance': governanceCollection,
  'policies': policiesCollection,
};

