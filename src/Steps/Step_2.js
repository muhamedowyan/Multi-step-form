import { useContext } from 'react';
import '../App.css';
import { FormContext } from './FormContext';

export default function SelectPlan() {
    const { currentPage, setCurrentPage, plan, setPlan, prices } = useContext(FormContext);

    return (
        <div className="step-form">
            <h1>Select your plan</h1>
            <p className="step-about">You have the option of monthly or yearly billing.</p>
            <div className='plans'>
                <div onClick={() => setPlan({ ...plan, plan: "arcade", planPrice: prices.arcade })} className={plan.plan === "arcade" ? "plan-card choosen-plan" : "plan-card"}>
                    <img className="plan-icon" src='/imgs/icon-arcade.svg' alt='Arcade icon' />
                    <div className='plan-info'>
                        <span className='plan-title'>Arcade</span>
                        <span className='price'>{plan.billingWay === "monthly" ? `$${prices.arcade}/mo` : "$90/yr"}</span>
                        {plan.billingWay === "yearly" && <p className='free-trail'>2 months free</p>}
                    </div>
                </div>
                <div onClick={() => setPlan({ ...plan, plan: "advanced", planPrice: prices.advanced })} className={plan.plan === "advanced" ? "plan-card choosen-plan" : "plan-card"}>
                    <img className="plan-icon" src='/imgs/icon-advanced.svg' alt="..." />
                    <div className='plan-info'>
                        <span className='plan-title'>Advanced</span>
                        <span className='price'>{plan.billingWay === "monthly" ? `$${prices.advanced}/mo` : "$120/yr"}</span>
                        {plan.billingWay === "yearly" && <p className='free-trail'>2 months free</p>}
                    </div>
                </div>
                <div onClick={() => setPlan({ ...plan, plan: "pro", planPrice: prices.pro })} className={plan.plan === "pro" ? "plan-card choosen-plan" : "plan-card"}>
                    <img className="plan-icon" src='/imgs/icon-pro.svg' alt='...' />
                    <div className='plan-info'>
                        <span className='plan-title'>Pro</span>
                        <span className='price'>{plan.billingWay === "monthly" ? `$${prices.pro}/mo` : "$150/yr"}</span>
                        {plan.billingWay === "yearly" && <p className='free-trail'>2 months free</p>}
                    </div>
                </div>
            </div>
            <div className='billing-toggle'>
                <p className={plan.billingWay === "monthly" ? "choosen-billing-way" : ""}>Monthly</p>
                <label className="switch">
                    <input type="checkbox" checked={plan.billingWay === "yearly"} onChange={() => {
                        setPlan({ ...plan, billingWay: plan.billingWay === "monthly" ? "yearly" : "monthly" });
                    }} />
                    <span className="slider round"></span>
                </label>
                <p className={plan.billingWay === "yearly" ? "choosen-billing-way" : ""}>Yearly</p>
            </div>
            <div className='navigation-buttons'>
                <button type='submit' disabled={!plan.plan} className={plan.plan ? "activeButton" : ""} onClick={() => setCurrentPage(currentPage + 1)}>Next Step</button>
                <button className='go-back' onClick={() => setCurrentPage(currentPage - 1)}>Go Back</button>
            </div>
        </div>
    );
}
