import BenefitItem from "../../components/BenefitItem/BenefitItem";

import "./BenefitsSection.css"


function BenefitsSection({benefits}) {

    return (
        <div className="benefits-section">
            <h3>
                Pourquoi corriger ? 
            </h3>
            {benefits.map((benefit) => (
                <BenefitItem key={benefit.title} benefit={benefit} />
            ))}
        </div>  
    );
} 

export default BenefitsSection;