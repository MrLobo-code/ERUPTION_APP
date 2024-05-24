import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../pages/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  const [clientSecret, setClientSecret] = useState('')
  
  const handleSubmit = async () => {
    const res = await fetch("http://192.168.2.157:8000/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency: 'usd',
        amount: 888,
      }),
    })

    const { client_secret } = await res.json();

    setClientSecret(client_secret)
  }

  useEffect(() => {
    handleSubmit();
  }, [])

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Checkout;