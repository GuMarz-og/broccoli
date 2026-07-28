import "./ImprovementRecommendation.css"

function ImprovementRecommendation({recommendation}) {

    return (
        <div className="improvement-recommendation">

            <h3>
                Solution
            </h3>

            <p>
                {recommendation}
            </p>

        </div>
    );
} 

export default ImprovementRecommendation;