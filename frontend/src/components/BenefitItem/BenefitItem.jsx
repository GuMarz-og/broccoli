import "./BenefitItem.css";


function BenefitItem({ benefit }) {
    return (
        <div className="benefit-item">
            <strong>
                {benefit.label}:
            </strong>
            <p>
                {benefit.data.reason}
            </p>
        </div>
    );
}

export default BenefitItem;