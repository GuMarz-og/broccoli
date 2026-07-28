import ImprovementRecommendation from "../../components/ImprovementRecommendation/ImprovementRecommendation";
import ImprovementHeader from "../../components/ImprovementHeader/ImprovementHeader";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import ImprovementEstimatedGain from "../../components/ImprovementEstimatedGain/ImprovementEstimatedGain";
import ImprovementIndicators from "../../components/ImprovementIndicators/ImprovementIndicators";

import "./ImprovementCard.css";

function ImprovementCard({improvement}) {

    const {
        severity,
        priority,
        difficulty,
        title,
        description,
        recommendation,
        benefits,
        estimatedGain
    } = improvement;

    return (
        <article className="improvement-card">
            
            <ImprovementIndicators severity={severity} priority={priority} difficulty={difficulty} />
            <ImprovementHeader title={title} description={description} />
            <ImprovementRecommendation recommendation={recommendation} />
            <BenefitsSection benefits={benefits} />
            <ImprovementEstimatedGain estimatedGain={estimatedGain} />

        </article>
    );
} 

export default ImprovementCard;