import BenefitItem from "../../components/BenefitItem/BenefitItem";


function BenefitsSection({benefitList}) {

    return (
        <div className="benefits-section">
            <h3>
                Pourquoi corriger ? 
            </h3>
            {benefitList.map((benefit) => (
                <BenefitItem key={benefit.label} benefit={benefit} />
            ))}
        </div>  
    );
} 

export default BenefitsSection;