import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe) {
      return
    }

    setLoading(true);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        // return_url: navigate("/"),
        return_url: 'http://localhost:5173/home',
      },
    });

    if (error) {
      handleError(error);
      console.log("Status: ERROR");
    } else {
      console.log("Status: ok");
    }

  };

  return (
    <>
      <div className='h-screen flex flex-col justify-center'>
        <h1 className='flex justify-center m-8 self-center text-2xl font-semibold whitespace-nowrap'>Ya casi es tuyo!!!</h1>
        <div className='w-screen flex justify-center'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center w-1/3'>
            <PaymentElement />
            <button type="submit" disabled={!stripe || loading} className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>
              Submit Payment
            </button>
            {errorMessage && <div>{errorMessage}</div>}
          </form>
        </div>
      </div>
    </>
  );
}