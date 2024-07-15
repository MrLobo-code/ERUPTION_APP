import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../pages/CheckoutForm";
import { apiAuth } from "../../api/api";
import LoadingView from "../../common_user/LoadingView";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Checkout = () => {
  const location = useLocation();
  const { amount, currency } = location.state;
  const [clientSecret, setClientSecret] = useState('')

  const handleSubmit = async () => {
    console.log(amount, currency);
    const res = await apiAuth({
      url: "/create-checkout-session",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        currency: currency,
        amount: amount,
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