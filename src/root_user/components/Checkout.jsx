import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../pages/CheckoutForm";
import { apiAuth } from "../../api/api";
import LoadingView from "../../common_user/LoadingView";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('')

  const handleSubmit = async () => {
    const res = await apiAuth({
      url: "/create-checkout-session",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        currency: 'usd',
        amount: 888,
      }),
    })
    const { client_secret } = await res.data;

    setClientSecret(client_secret)
  }

  useEffect(() => {
    handleSubmit();
  }, [])

  return (
    <>
      {
        !clientSecret
          ? <LoadingView />
          : (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          )
      }
    </>
  );
};

export default Checkout;