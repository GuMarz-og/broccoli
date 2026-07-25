import "./BenefitItem.css";


function BenefitItem({ benefit }) {

    const { title, reason, impact } = benefit;

    if (impact <= 0) {
        return null;
    }

    return (
        <div className="benefit-item">
            <strong>
                {title}:
            </strong>
            <p>
                {reason}
            </p>
        </div>
    );
}

export default BenefitItem;