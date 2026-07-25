import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import UrlForm from "../../components/UrlForm/UrlForm";
import ScoreSection from "../../components/ScoreSection/ScoreSection";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import ImprovementGrid from "../../components/ImprovementGrid/ImprovementGrid";
import ImprovementCard from "../../components/ImprovementCard/ImprovementCard";

import "./Home.css";
import analysis from "../../data/mockAnalysis.json";

function Home() {
    return (
        <main className="home">
            <Container>
                <Header />
                <UrlForm />
                <ScoreSection>
                    {analysis.scores.map((score) => (

                        <ScoreCard
                            key={score.id}
                            score={score}
                        />

                    ))}
                </ScoreSection>
                <ImprovementGrid>
                    {analysis.improvements.map((improvement) => (

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