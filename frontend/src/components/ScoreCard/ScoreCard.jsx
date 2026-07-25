function ScoreCard({score}) {

    return (
        <div>
            <h2>
                {score.title}   
            </h2>

            <p>
                {score.score} 
            </p>

            <p>
                {score.grade}
            </p>
        </div>
    );
} 

export default ScoreCard;