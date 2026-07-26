import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import UrlForm from "../../components/UrlForm/UrlForm";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import AnalysisResult from "../../components/AnalysisResult/AnalysisResult";

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
                    <AnalysisResult analysis={analysis} />
                )}
            </Container>
        </main>
    );
}

export default Home;