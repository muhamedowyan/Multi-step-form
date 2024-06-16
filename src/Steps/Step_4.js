import { useContext } from "react";
import { FormContext } from "./FormContext";

export default function Summary() {
    const { currentPage, setCurrentPage, plan, addOn, prices, totalPrice } = useContext(FormContext);

    return (
        <div className="step-form">
            <h1>Finishing up</h1>
            <p className="step-about">
                Double-check everything looks OK before confirming
            </p>
            <div className="summary">
                <div className="plan-choosen-summary">
                    <div className="plan-summary">
                        <span>{`${plan.plan} (${plan.billingWay})`}</span><br/>
                        <button className="change-plan" onClick={() => setCurrentPage(1)}>Change</button>
                    </div>
                    <span className="bill">{plan.billingWay === "monthly" ? `$${plan.planPrice}/mo` : `$${plan.planPrice * 10}/yr`}</span>
                </div>
                <div className="add-on-summary">
                    {addOn.onlineServices && (
                        <div className="add-on-choosen-summary">
                            <span>Online services</span>
                            <span className="choosen-add-on-summary">{plan.billingWay === "monthly" ? `+$${prices.onlineServices}/mo` : `+$${prices.onlineServices * 10}/yr`}</span>
                        </div>
                    )}
                    {addOn.largerStorage && (
                        <div className="add-on-choosen-summary">
                            <span>Larger storage</span>
                            <span className="choosen-add-on-summary">{plan.billingWay === "monthly" ? `+$${prices.largerStorage}/mo` : `+$${prices.largerStorage * 10}/yr`}</span>
                        </div>
                    )}
                    {addOn.customizableProfile && (
                        <div className="add-on-choosen-summary">
                            <span>Customizable profile</span>
                            <span className="choosen-add-on-summary">{plan.billingWay === "monthly" ? `+$${prices.customizableProfile}/mo` : `+$${prices.customizableProfile * 10}/yr`}</span>
                        </div>
                    )}
                </div>
            </div>
                <div className="total">
                    <span>Total(per {plan.billingWay === "monthly"?"month":"year"})</span>
                    <span className="total-price">{`$${totalPrice}/${plan.billingWay === "monthly"?"mo":"yr"}`}</span>
                </div>
                <div className="navigation-buttons">
                    <button className="activeButton" onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}>Confirm</button>
                    <button className="go-back" onClick={() => {
                        setCurrentPage(currentPage - 1);
                    }}>Go back</button>
                </div>
        </div>
    );
}
