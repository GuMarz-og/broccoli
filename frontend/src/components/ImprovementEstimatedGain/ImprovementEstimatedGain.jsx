import "./ImprovementEstimatedGain.css"

function ImprovementEstimatedGain({estimatedGain}) {

    const {
        bandwidth,
        requests,
        co2,
        lcp
    } = estimatedGain;

    return (
        <div className="estimated-gain">
            <h3>
                Gains estimés :
            </h3>
            <ul>
                <li>
                    <span className="gain-label">Bande passante :</span> {bandwidth.value} {bandwidth.unit}
                </li>
                <li>
                    <span className="gain-label">Requêtes :</span> {requests.value} {requests.unit}
                </li>
                <li>
                    <span className="gain-label">CO2 :</span> {co2.value} {co2.unit}
                </li>
                <li>
                    <span className="gain-label">LCP :</span> {lcp.value} {lcp.unit}
                </li>
            </ul>
        </div>
    );
} 

export default ImprovementEstimatedGain;