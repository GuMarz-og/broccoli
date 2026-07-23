import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import UrlForm from "../../components/UrlForm/UrlForm";
import ScoreSection from "../../components/ScoreSection/ScoreSection";
import ScoreCard from "../../components/ScoreCard/ScoreCard";

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

function Home() {
    return (
        <main className="home">
            <Container>
                <Header />
                <UrlForm />
                <ScoreSection>
                    {scores.map((scoreData) => (

                        <ScoreCard
                            key={scoreData.title}
                            title={scoreData.title}
                            score={scoreData.score}
                            grade={scoreData.grade}
                            color={scoreData.color}
                        />

                    ))}
                </ScoreSection>
            </Container>
        </main>
    );
}

export default Home;