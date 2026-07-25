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
                    <span className="gain-label">Bande passante :</span> {bandwidth}
                </li>
                <li>
                    <span className="gain-label">Requêtes :</span> {requests}
                </li>
                <li>
                    <span className="gain-label">CO2 :</span> {co2}
                </li>
                <li>
                    <span className="gain-label">LCP :</span> {lcp}
                </li>
            </ul>
        </div>
    );
} 

export default ImprovementEstimatedGain;