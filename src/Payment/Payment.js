import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutFrom from "./CheckoutForm";

function Payment() {
  const stripePromise = loadStripe(
    "pk_test_51MXOWSGYEoGN3ZPiBkdfjMjwYk0OkbpdimMmrwljJlJoUZSudhHkuoyaiKLmZwzHvPErPNmfrdJvMvezjuLiRkpM001h1mkBoA"
  );
  const price = 2.99;
  return (
    <div className="w-96 my-12 m-8 mx-auto">
      <Elements stripe={stripePromise}>
        <CheckoutFrom price={price} />
      </Elements>
    </div>
  );
}

export default Payment;
