export type SitePage = "home" | "pricing" | "setup" | "contact";

export type BlogSubSection = {
  h3: string;
  body: string[];
};

export type BlogSection = {
  h2: string;
  body: string[];
  subsections?: BlogSubSection[];
};

export type BlogFaqItem = {
  q: string;
  a: string;
};

export type ClusterKey = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L";

export type BlogArticle = {
  n: number;
  cluster: ClusterKey;
  pillar: boolean;
  slug: string;
  keyword: string;
  title: string;
  h1: string;
  metaDescription: string;
  secondaryKeywords: string[];
  intent: string;
  intro: string[];
  sections: BlogSection[];
  faq: BlogFaqItem[];
  conclusion: string[];
  relatedSlugs: string[];
  sitePages: SitePage[];
  featuredImage: string;
  imageAlt: string;
};
