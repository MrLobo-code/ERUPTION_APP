import React, { useEffect } from "react";

const BuyProductPage = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/buy-button.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Clean up on unmount
        };
    }, []);

    return (
        <>
            <stripe-buy-button
                buy-button-id="buy_btn_1PJkosP3BkSI1DXnEHb7nYh5"
                publishable-key={import.meta.env.VITE_STRIPE_PK}
            >
            </stripe-buy-button>
        </>
    );
}

export default BuyProductPage;