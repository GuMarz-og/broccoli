function ScoreCard({ title, score, grade, color }) {

    return (
        <div>
            <h2>
                {title}   
            </h2>

            <p>
                {score} 
            </p>

            <p>
                {grade}
            </p>
        </div>
    );
} 

export default ScoreCard;