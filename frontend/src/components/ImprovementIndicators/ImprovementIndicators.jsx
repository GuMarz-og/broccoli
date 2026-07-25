function ImprovementIndicators({severity, priority, difficulty}) {

    return (
            <div className="improvement-indicators">
                <span className={`severity severity-${severity.level}`}>
                    {severity.label}
                </span>
                <span className={`difficulty difficulty-${difficulty.level}`}>
                    {difficulty.label}
                </span>
                <span className={`priority priority-${priority}`}>
                    {priority}
                </span>
            </div>
    );
} 

export default ImprovementIndicators;