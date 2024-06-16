import { useContext } from "react";
import { FormContext } from "./FormContext";

export default function AddOns() {
    const { currentPage,plan, setCurrentPage, addOn, setAddOn, prices } = useContext(FormContext);

    return (
        <div className="step-form">
            <h1>Pick add-ons</h1>
            <p className="step-about">Add-ons help enhance your gaming experience.</p>
            <div className="select-add-ons">
                <div className={addOn.onlineServices ? "choosen-plan add-on" : "add-on"} onClick={() => setAddOn({ ...addOn, onlineServices: !addOn.onlineServices })}>
                    <div className="add-on-info">
                        <input type="checkbox" checked={addOn.onlineServices} onChange={(event) => setAddOn({ ...addOn, onlineServices: event.target.checked })} />
                        <div>
                            <p className="add-on-title">Online services</p>
                            <p className="title-description">Access to multiplayer games</p>
                        </div>
                    </div>
                    <span className="add-on-price">{plan.billingWay === "monthly" ? `+$${prices.onlineServices}/mo` : `+$${prices.onlineServices * 10}/yr`}</span>
                </div>
                <div className={addOn.largerStorage ? "choosen-plan add-on" : "add-on"} onClick={() => setAddOn({ ...addOn, largerStorage: !addOn.largerStorage })}>
                    <div className="add-on-info">
                        <input type="checkbox" checked={addOn.largerStorage} onChange={(event) => setAddOn({ ...addOn, largerStorage: event.target.checked })} />
                        <div>
                            <p className="add-on-title">Larger storage</p>
                            <p className="title-description">Extra 1TB of cloud storage</p>
                        </div>
                    </div>
                    <span className="add-on-price">{plan.billingWay === "monthly" ? `+$${prices.largerStorage}/mo` : `+$${prices.largerStorage * 10}/yr`}</span>
                </div>
                <div className={addOn.customizableProfile ? "choosen-plan add-on" : "add-on"} onClick={() => setAddOn({ ...addOn, customizableProfile: !addOn.customizableProfile })}>
                    <div className="add-on-info">
                        <input type="checkbox" checked={addOn.customizableProfile} onChange={(event) => setAddOn({ ...addOn, customizableProfile: event.target.checked })} />
                        <div>
                            <p className="add-on-title">Customizable profile</p>
                            <p className="title-description">Custom theme on your profile</p>
                        </div>
                    </div>
                    <span className="add-on-price">{ plan.billingWay === "monthly"? `+$${prices.customizableProfile}/mo` : `+$${prices.customizableProfile * 10}/yr`}</span>
                </div>
            </div>
            <div className="navigation-buttons">
                <button className="activeButton" onClick={() => setCurrentPage(currentPage + 1)}>Next Step</button>
                <button className="go-back" onClick={() => setCurrentPage(currentPage - 1)}>Go Back</button>
            </div>
        </div>
    );
}
