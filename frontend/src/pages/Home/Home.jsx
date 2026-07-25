import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import UrlForm from "../../components/UrlForm/UrlForm";
import ScoreSection from "../../components/ScoreSection/ScoreSection";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import ImprovementGrid from "../../components/ImprovementGrid/ImprovementGrid";
import ImprovementCard from "../../components/ImprovementCard/ImprovementCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import "./Home.css";
import mockAnalysis  from "../../data/mockAnalysis.json";

import { useState } from "react";

function Home() {

    const [analysis, setAnalysis] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function handleAnalyze(url) {

        setAnalysis(null);
        setIsLoading(true);
        setError(null);

        console.log("Analyse de :", url);

        setTimeout(() => {

            setAnalysis(mockAnalysis);

            setIsLoading(false);

        }, 1500);

    }

    return (
        <main className="home">
            <Container>
                <Header />
                <UrlForm onAnalyze={handleAnalyze} />
                {isLoading && (
                    <Loading />
                )}
                {error && (
                    <Error />
                )}
                {analysis && (
                <>
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
                </>
                )}
            </Container>
        </main>
    );
}

export default Home;