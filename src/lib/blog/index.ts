import type { BlogArticle } from "./types";
import { clusterA } from "./content/cluster-a";
import { clusterB } from "./content/cluster-b";
import { clusterC } from "./content/cluster-c";
import { clusterD } from "./content/cluster-d";
import { clusterE } from "./content/cluster-e";
import { clusterF } from "./content/cluster-f";
import { clusterG } from "./content/cluster-g";
import { clusterH } from "./content/cluster-h";
import { clusterI } from "./content/cluster-i";
import { clusterJ } from "./content/cluster-j";
import { clusterK } from "./content/cluster-k";
import { clusterL } from "./content/cluster-l";

export const blogArticles: BlogArticle[] = [
  ...clusterA,
  ...clusterB,
  ...clusterC,
  ...clusterD,
  ...clusterE,
  ...clusterF,
  ...clusterG,
  ...clusterH,
  ...clusterI,
  ...clusterJ,
  ...clusterK,
  ...clusterL,
].sort((a, b) => a.n - b.n);

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}

export function getRelatedArticles(article: BlogArticle): BlogArticle[] {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is BlogArticle => Boolean(a));
}

export function getArticlesByCluster(cluster: BlogArticle["cluster"]): BlogArticle[] {
  return blogArticles.filter((a) => a.cluster === cluster);
}

export * from "./types";
export * from "./clusters";
