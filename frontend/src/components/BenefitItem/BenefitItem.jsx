import "./BenefitItem.css";


function BenefitItem({ benefit }) {

    const { label, data } = benefit;

    if (data.impact <= 0) {
        return null;
    }

    return (
        <div className="benefit-item">
            <strong>
                {label}:
            </strong>
            <p>
                {data.reason}
            </p>
        </div>
    );
}

export default BenefitItem;