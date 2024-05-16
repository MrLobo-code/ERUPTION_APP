import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    try {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }

      const result = await fetch("http://192.168.2.157:8000/api/create-checkout-session", {
        method: 'POST',
        mode: 'payment',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currency: 'usd',
          // email: emailInput,
          amount: 1000 * 100,
          // paymentMethodType: "card",
        }),
        // VITE_STRIPE_SK: import.meta.env.VITE_STRIPE_SK
      });

      const { client_secret: clientSecret } = await result.json();
      // const { client_secret: clientSecret } = await result.json();

      const { error } = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
      });


      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;

// import React, { useState } from 'react';
// import { PaymentElement, Elements, useStripe, useElements, } from '@stripe/react-stripe-js';

// export const CheckoutForm = () => {
//   // const stripe = useStripe();
//   // const elements = useElements();

//   // const [errorMessage, setErrorMessage] = useState('');
//   // const [emailInput, setEmailInput] = useState('');

//   // const backendUrl = import.meta.env.VITE_STRIPE_PK_AIRCODE_URL;

//   // const handleSubmit = async (event) => {
//   //   try {
//   //     event.preventDefault();

//   //     if (elements == null || stripe == null) {
//   //       return;
//   //     }

//   //     // Trigger form validation and wallet collection
//   //     const { error: submitError } = await elements.submit();
//   //     if (submitError?.message) {
//   //       // Show error to your customer
//   //       setErrorMessage(submitError.message);
//   //       return;
//   //     }

//   //     const price = 12;

// Create the PaymentIntent and obtain clientSecret from your server endpoint
// const res = await fetch(backendUrl, {
// const res = await fetch("http://192.168.2.157:8000/api/create-checkout-session", {
//   method: 'POST',
//   mode: 'payment',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     currency: 'usd',
//     email: emailInput,
//     amount: price * 100,
//     paymentMethodType: "card",
//   }),
//   VITE_STRIPE_SK: "sk_test_51PDX3UP3BkSI1DXnKNKplW9FciUv9fm7Fjy9obggeTZz7KJlwcy8X8lauclblx4tQPOOr7S37hFUSYnOWoRrHIGm00YfdVllHs"
// });

// const { client_secret: clientSecret } = await res.json();

// const { error } = await stripe.confirmPayment({
//   //`Elements` instance that was used to create the Payment Element
//   elements,
//   clientSecret,
//   confirmParams: {
//     return_url: `${window.location.origin}/success`,
//   },
// });

// if (error) {
//   // This point will only be reached if there is an immediate error when
//   // confirming the payment. Show error to your customer (for example, payment
//   // details incomplete)
//   setErrorMessage(error.message);
// } else {
//   // Your customer will be redirected to your `return_url`. For some payment
//   // methods like iDEAL, your customer will be redirected to an intermediate
//   // site first to authorize the payment, then redirected to the `return_url`.
// }
//   } catch (e) {

//   }
// };

//   return (
//     // <form onSubmit={handleSubmit} className='px-4 bg-white rounded shadow-md p-6 max-w-sm mx-auto'>
//     <form>
//       {/* <div className='mb-6'>
//         <label htmlFor="email-input" className="block text-gray-700 font-bold mb-2">Email</label>
//         <div>
//           <input value={emailInput} onChange={(e => setEmailInput(e.target.value))} type="email" id="email-input" placeholder='johndoe@gmail.com' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
//         </div>
//       </div> */}
//       <PaymentElement />
//       {/* <button type="submit" disabled={!stripe || !elements} className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 hover:bg-blue-600"> */}
//       <button>
//         Pay
//       </button>
//       {/* Show error message to your customers */}
//       {/* {errorMessage && <div className="text-red-500 mt-3">{errorMessage}</div>} */}
//     </form>
//   );
// };

// export default CheckoutForm;