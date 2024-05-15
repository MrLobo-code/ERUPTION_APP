import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../pages/CheckoutForm";




const Checkout = () => {
  const stripePromise = loadStripe('pk_test_51PDX3UP3BkSI1DXnRtIUS2pG5q2U6M4Bg6PEiO6iMZ6sump4oks8qvXPCTJcnlBUdH446So4ftVWbdLX8LAihf2I00vZBZw08F');
  // const options = {
  //   // currency: 'usd',
  //   // email: 'algo@ogrg.com',
  //   // mode: 'payment',
  //   // amount: 12 * 100,
  //   // paymentMethodType: "card",
  //   // VITE_STRIPE_SK: "sk_test_51PDX3UP3BkSI1DXnKNKplW9FciUv9fm7Fjy9obggeTZz7KJlwcy8X8lauclblx4tQPOOr7S37hFUSYnOWoRrHIGm00YfdVllHs"
  // };

  const options = {
    // passing the client secret obtained from the server
    // clientSecret: '{{CLIENT_SECRET}}',
    clientSecret: import.meta.env.VITE_STRIPE_SK
  };

  return (
    <div className="flex container mt-8">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
