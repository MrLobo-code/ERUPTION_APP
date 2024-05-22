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


  // // Set up Stripe.js and Elements to use in checkout form
  // const elements = stripePromise.elements(options);

  // // Create and mount the Payment Element
  // const paymentElement = elements.create('payment');
  // paymentElement.mount('#payment-element');

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

// import React, { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "../pages/CheckoutForm";

// const Checkout = () => {
//   const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

//   const [clientSecret, setClientSecret] = useState("");

//   const price = 777;

//   useEffect(() => {
//     // Llame a su backend para crear el PaymentIntent y obtener el clientSecret
//     fetch("http://192.168.2.157:8000/api/create-checkout-session", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         currency: 'usd',
//         amount: price * 100,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const options = {
//     // passing the client secret obtained from the server
//     // clientSecret: import.meta.env.VITE_STRIPE_SK
//     clientSecret
//   };

//   return (
//     <div className="flex container mt-8">
//       {/* {clientSecret && ( */}
//         <Elements stripe={stripePromise} options={options}>
//           <CheckoutForm />
//         </Elements>
//       {/* )} */}
//     </div>
//   );
// };

// export default Checkout;
