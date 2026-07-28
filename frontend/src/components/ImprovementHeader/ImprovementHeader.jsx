import "./ImprovementHeader.css"

function ImprovementHeader({title, description}) {

    return (
        <div className="improvement-header">
            <h2>
                {title}   
            </h2>

            <p>
                {description} 
            </p>
        </div>
    );
} 

export default ImprovementHeader;