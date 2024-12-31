import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PlansCard = ({time , price}) => {
  const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePayment = async () => {
    try {
      const priceNumber = Number(price.replace(/,/g, ''));
      
      // Validate price before proceeding
      if (isNaN(priceNumber) || priceNumber <= 0) {
        throw new Error('Invalid price amount');
      }

      const options = {
        key: razorpayKeyId,
        amount: priceNumber * 100,
        currency: "INR",
        name: "GYM Membership",
        description: `${time} Month Membership Plan`,
        handler: function(response) {
          if (response.razorpay_payment_id) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
          }
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal closed');
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        notes: {
          plan_duration: time,
          amount: priceNumber
        },
        theme: {
          color: "#3399cc"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function(response) {
        alert("Payment Failed: " + response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.error('Payment initialization error:', error);
      alert('Unable to initialize payment. Please try again later.');
    }
  };

  return (
    <>
      <div data-aos="fade-up" className={`w-full shadow-lg bg-yellow-100`}>
        <div className="flex flex-col gap-2 p-4">
          <h1 className="text-xl"> {time} MONTH MEMBERSHIP</h1>
          <div className="flex">
            <p>₹</p>
            <p className="text-6xl pb-3">{price}</p>
          </div>
          <p className="font-thin">Access to all premium facilities unlimited group fitness classes and steam bath</p>
          <p className="font-light">Valid for {time} months</p>
          <div 
            className="w-full px-2 py-3 text-center bg-black shadow-md text-white cursor-pointer hover:bg-gray-800" 
            onClick={handlePayment}
          >
            Buy Now
          </div>
        </div>
      </div>
    </>
  );
}

export default PlansCard;