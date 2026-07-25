function ImprovementIndicators({severity, priority, difficulty}) {

    return (
            <div className="improvement-indicators">
                <span className={`severity severity-${severity}`}>
                    {severity}
                </span>
                <span className={`difficulty difficulty-${difficulty}`}>
                    {difficulty}
                </span>
                <span className={`priority priority-${priority}`}>
                    {priority}
                </span>
            </div>
    );
} 

export default ImprovementIndicators;