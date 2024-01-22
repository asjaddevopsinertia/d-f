import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import check from '../assets/images/checked.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CheckoutForm({formData}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error,paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
       return_url : 'http://localhost:3000/'
      },
      redirect: 'if_required'
    });

    console.log("payment", paymentIntent)

    console.log("error", error)
    if (error) {
      setMessage(error.message);
    } else if(paymentIntent && paymentIntent.status === "succeeded"){
        axios.post('http://localhost:4000/appointment/select-service', formData)
        setMessage("Payment Status: " + paymentIntent.status)
        setStatus(paymentIntent.status)
    }else{
        setMessage('Unexpected state')
    }

    setIsProcessing(false);
  };

   const options = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
    }
  };
  return (
    <>
    
    {status === "succeeded" ? 
    <div className="pt-[60px] pb-[60px] flex justify-center items-center flex-col">
     <img src={check} className="w-[64px]" />
    <h3 className="text-[25px] mt-[10px]">
      Your appointment has been successfully submitted
    </h3>

    <Link className="mt-[20px] text-white bg-[#0142E8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[5px] sm:w-auto px-5 py-2.5 text-center" disabled={isProcessing || !stripe || !elements} id="submit">
        Go to Your Dashboard
      </Link> 
    </div>:  
    <form className="w-full" id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement options = {options} id="payment-element" />
      <button className="mt-[20px] text-white bg-[#0142E8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[5px] sm:w-auto px-5 py-2.5 text-center" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div className="mt-[10px] ml-[3px]" id="payment-message">{message}</div>}
    </form>}
    </>
  );
}