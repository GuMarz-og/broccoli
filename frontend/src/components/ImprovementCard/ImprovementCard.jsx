import ImprovementRecommendation from "../../components/ImprovementRecommendation/ImprovementRecommendation";
import ImprovementHeader from "../../components/ImprovementHeader/ImprovementHeader";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import ImprovementEstimatedGain from "../../components/ImprovementEstimatedGain/ImprovementEstimatedGain";
import ImprovementIndicators from "../../components/ImprovementIndicators/ImprovementIndicators";


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

    const benefitList = [
        {label: "Accessibilité", data: benefits.accessibility},
        {label: "Green IT", data: benefits.greenIT},
        {label: "Performance", data: benefits.performance},
        {label: "SEO",  data: benefits.seo}
    ];

    return (
        <article className="improvement-card">
            
            <ImprovementIndicators severity={severity} priority={priority} difficulty={difficulty} />
            <ImprovementHeader title={title} description={description} />
            <ImprovementRecommendation recommendation={recommendation} />
            <BenefitsSection benefitList={benefitList} />
            <ImprovementEstimatedGain estimatedGain={estimatedGain} />

        </article>
    );
} 

export default ImprovementCard;