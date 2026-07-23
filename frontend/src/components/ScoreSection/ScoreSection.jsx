import "./ScoreSection.css";


function ScoreSection({ children }) {
    return (
        <div className="score-section">
            {children}
        </div>
    );
}

export default ScoreSection;