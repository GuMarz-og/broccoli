import ScoreSection from "../../components/ScoreSection/ScoreSection";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import ImprovementGrid from "../../components/ImprovementGrid/ImprovementGrid";
import ImprovementCard from "../../components/ImprovementCard/ImprovementCard";


function AnalysisResult({ analysis }) {

    const {
        scores,
        improvements
    } = analysis;

    return (
        <div className="analysis-result">
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
        </div>
    );
}
export default AnalysisResult;