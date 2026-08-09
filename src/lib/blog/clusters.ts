import type { ClusterKey } from "./types";

export const CLUSTERS: { key: ClusterKey; name: string; description: string }[] = [
  { key: "A", name: "Abonnement IPTV", description: "Durées, offres et valeur autour de la souscription." },
  { key: "B", name: "IPTV France", description: "Le marché français : services, chaînes, souscription locale." },
  { key: "C", name: "IPTV Premium", description: "Ce que recouvre vraiment le positionnement haut de gamme." },
  { key: "D", name: "Smart TV & Appareils", description: "Compatibilité par marque et par boîtier." },
  { key: "E", name: "Applications & Lecteurs", description: "Les logiciels qui lisent les flux IPTV." },
  { key: "F", name: "Installation & Configuration", description: "Fonctionnement technique et installation pas à pas." },
  { key: "G", name: "Qualité 4K / HD / 8K", description: "Résolution, stabilité et performance du flux." },
  { key: "H", name: "Sport & Football", description: "Sport en direct, Ligue 1, Ligue des Champions." },
  { key: "I", name: "Films, Séries & VOD", description: "Contenu à la demande et vocabulaire du replay." },
  { key: "J", name: "Légalité & Information", description: "Cadre neutre : technologie et contenu, deux sujets distincts." },
  { key: "K", name: "Guides d'achat & Comparatifs", description: "Aider à choisir et à comparer objectivement." },
  { key: "L", name: "Tests & Avis", description: "Vérifier avant de s'engager : essais, avis, tests." },
];

export function clusterLabel(key: ClusterKey): string {
  return CLUSTERS.find((c) => c.key === key)?.name ?? key;
}
