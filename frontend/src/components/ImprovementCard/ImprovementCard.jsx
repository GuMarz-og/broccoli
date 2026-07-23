import BenefitItem from "../../components/BenefitItem/BenefitItem";


function ImprovementCard({improvement}) {

    const {
        severity,
        priority,
        title,
        description,
        recommendation,
        benefits
    } = improvement;

    const benefitList = [
        {label: "Accessibilité", data: benefits.accessibility},
        {label: "Green IT", data: benefits.greenIT},
        {label: "Performance", data: benefits.performance},
        {label: "SEO",  data: benefits.seo}
    ];

    return (
        <article className="improvement-card">

            <h2>
                {title}   
            </h2>

            <p>
                {description} 
            </p>

            <p>
                {recommendation}
            </p>
            {benefitList.map((benefit) => (
                benefit.data.impact > 0 && (
                    <BenefitItem key={benefit.label} benefit={benefit} />
                )
            ))}
        </article>
    );
} 

export default ImprovementCard;