import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import UrlForm from "../../components/UrlForm/UrlForm";
import ScoreSection from "../../components/ScoreSection/ScoreSection";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import ImprovementGrid from "../../components/ImprovementGrid/ImprovementGrid";
import ImprovementCard from "../../components/ImprovementCard/ImprovementCard";

import "./Home.css";

const scores = [

    {
        title: "Accessibilité",
        score: 91,
        grade: "A",
        color: "#3B82F6"
    },

    {
        title: "Éco-conception",
        score: 78,
        grade: "B",
        color: "#22C55E"
    }

];

const improvements = [
{
      "id": "RGESN-IMG-01",
      "source": "RGESN",
      "title": "Compresser les images",
      "severity": "critical",
      "priority": 100,
      "difficulty": "easy",

      "stats": {
        "affectedElements": 18
      },

      "description": "18 images sont plus volumineuses que nécessaire.",

      "recommendation": "Convertir les images en WebP ou AVIF et adapter leur résolution réelle.",

      "benefits": {
        "accessibility": {
          "impact": 1,
          "reason": "Réduit le temps d'attente des utilisateurs avec une connexion lente."
        },
        "greenIT": {
          "impact": 3,
          "reason": "Réduit le volume de données transférées et la consommation de bande passante."
        },
        "performance": {
          "impact": 3,
          "reason": "Améliore le temps de chargement des pages."
        },
        "seo": {
          "impact": 2,
          "reason": "De meilleures performances peuvent améliorer le référencement."
        }
      },

      "estimatedGain": {
        "bandwidth": "-3.2 MB",
        "requests": 0,
        "co2": "-1.4 g",
        "lcp": "-650 ms"
      },

      "reference": {
        "standard": "RGESN",
        "criterion": "Images",
        "url": "https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
      }
    },

    {
      "id": "WCAG-1.1.1",
      "source": "WCAG",
      "title": "Ajouter un texte alternatif aux images",
      "severity": "high",
      "priority": 95,
      "difficulty": "easy",

      "stats": {
        "affectedElements": 12
      },

      "description": "12 images ne possèdent pas d'attribut alt.",

      "recommendation": "Ajouter un attribut alt décrivant le contenu ou la fonction de chaque image.",

      "benefits": {
        "accessibility": {
          "impact": 3,
          "reason": "Permet aux lecteurs d'écran de restituer le contenu des images."
        },
        "greenIT": {
          "impact": 0,
          "reason": ""
        },
        "performance": {
          "impact": 0,
          "reason": ""
        },
        "seo": {
          "impact": 2,
          "reason": "Les moteurs de recherche comprennent mieux le contenu des images."
        }
      },

      "reference": {
        "standard": "WCAG 2.2",
        "criterion": "1.1.1",
        "url": "https://www.w3.org/TR/WCAG22/#non-text-content"
      }
    }
]

function Home() {
    return (
        <main className="home">
            <Container>
                <Header />
                <UrlForm />
                <ScoreSection>
                    {scores.map((score) => (

                        <ScoreCard
                            key={score.title}
                            scoreData={score}
                        />

                    ))}
                </ScoreSection>
                <ImprovementGrid>
                    {improvements.map((improvement) => (

                        <ImprovementCard
                            key={improvement.id}
                            improvement={improvement}
                        />

                    ))}
                </ImprovementGrid>
            </Container>
        </main>
    );
}

export default Home;