function ImprovementCard({improvement}) {

    return (
        <article className="improvement-card">

            <h2>
                {improvement.title}   
            </h2>

            <p>
                {improvement.description} 
            </p>

            <p>
                {improvement.recommendation}
            </p>
        </article>
    );
} 

export default ImprovementCard;