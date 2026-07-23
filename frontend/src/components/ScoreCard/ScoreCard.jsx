function ScoreCard({scoreData}) {

    return (
        <div>
            <h2>
                {scoreData.title}   
            </h2>

            <p>
                {scoreData.score} 
            </p>

            <p>
                {scoreData.grade}
            </p>
        </div>
    );
} 

export default ScoreCard;