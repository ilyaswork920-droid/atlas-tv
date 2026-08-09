import type { Metadata } from "next";
import { blogArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { RevealGroup } from "@/components/ui/reveal";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: "Blog IPTV France | Guides, comparatifs et conseils",
  description:
    "Guides, comparatifs et conseils pratiques sur l'IPTV en France : abonnements, Smart TV, installation, qualité 4K, sport et légalité, expliqués simplement.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog IPTV France | Guides, comparatifs et conseils",
    description:
      "Guides, comparatifs et conseils pratiques sur l'IPTV en France, expliqués simplement.",
    url: `${siteConfig.url}/blog`,
    locale: "fr_FR",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Fixed-height dark spacer sits exactly behind the transparent header for nav contrast. */}
      <div aria-hidden className="h-24 bg-black" />

      <section className="bg-white pb-24 pt-14 sm:pb-28 sm:pt-16">
        <div className="container-edge" lang="fr">
          <div className="flex flex-col gap-3 pb-12 sm:pb-16">
            <h1 className="font-display text-5xl font-bold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              BLOGS
            </h1>
            <p className="max-w-xl text-balance text-base text-neutral-500 sm:text-lg">
              Guides, comparatifs et réponses concrètes pour comprendre l&apos;IPTV, choisir son
              abonnement et l&apos;installer sans accroc.
            </p>
          </div>

          <RevealGroup
            className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.04}
          >
            {blogArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
