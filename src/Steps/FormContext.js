import React, { createContext, useState, useEffect } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [prices, setPrices] = useState({
        arcade: 9,
        advanced: 12,
        pro: 15,
        onlineServices: 1,
        largerStorage: 2,
        customizableProfile: 2,
    });

    const [currentPage, setCurrentPage] = useState(0);
    const [plan, setPlan] = useState({
        plan: "",
        billingWay: "monthly",
        planPrice: 0,
    });
    const [addOn, setAddOn] = useState({
        onlineServices: false,
        largerStorage: false,
        customizableProfile: false,
    });
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const calculateTotalPrice = () => {
        let basePrice = 0;
        if (plan.plan) {
            basePrice = prices[plan.plan];
        }
        let addOnsPrice = 0;
        if (addOn.onlineServices) addOnsPrice += prices.onlineServices;
        if (addOn.largerStorage) addOnsPrice += prices.largerStorage;
        if (addOn.customizableProfile) addOnsPrice += prices.customizableProfile;

        if (plan.billingWay === 'yearly') {
            basePrice *= 10;
            addOnsPrice *= 10;
        }
        return basePrice + addOnsPrice;
    };

    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [plan, addOn]);

    return (
        <FormContext.Provider value={{ currentPage, setCurrentPage, plan, setPlan, addOn, setAddOn, formInput, setFormInput, totalPrice, prices, setPrices }}>
            {children}
        </FormContext.Provider>
    );
};
