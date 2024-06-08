import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
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
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    alert(elements)

    setLoading(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // Confirm the PaymentIntent using the details collected by the Payment Element
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: navigate("/"),
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      handleError(error);
      console.log("ERROR");
    } else {
      console.log("NO ERROR");
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }

  };

  return (
    <>
      <div className='h-screen flex flex-col justify-center'>
        <h1 className='flex justify-center m-8 self-center text-2xl font-semibold whitespace-nowrap'>Ya casi es tuyo!!!</h1>
        <div className='w-screen flex justify-center'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center w-1/3'>
            <PaymentElement />
            {/* <button type="submit" disabled={!stripe || loading} className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'> */}
            <button type="submit" disabled={!stripe || !elements} className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>
              Submit Payment
            </button>
            {errorMessage && <div>{errorMessage}</div>}
          </form>
        </div>
      </div>
    </>
  );
}