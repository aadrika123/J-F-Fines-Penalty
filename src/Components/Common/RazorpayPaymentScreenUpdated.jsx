//////////////////////////////////////////////////////////////////////////////////////
//    Author -TALIB HUSSAIN
//    Version - 1.0
//    Date -
//    Revision - 1
//    Component  -
//    Date : 15-11-23
//////////////////////////////////////////////////////////////////////////////////////

import Logo from "/logo1.png";

export default async function RazorpayPaymentScreenUpdated(orderId, dreturn) {
  console.log("==2==the order id is....", orderId);
  console.log(dreturn());
  // TEST MODE
  // var options = {
  //   description: "Test payment updated",
  //   image: Logo,
  //   currency: "INR",
  //   key: 'rzp_test_NXHWEn0nSMDcnm', // TEST KEY
  //   amount: 2000,
  //   name: "Fines",
  //   order_id: orderId,
  //   prefill: {
  //     // email: profileData?.email,
  //     // contact: profileData?.mobileNumber,2000
  //     // name: profileData?.name,
  //     email: "abc@gmail.com",
  //     contact: "9123254999",
  //     name: "Mark Test",
  //   },
  //   theme: { color: "#3399cc" },
  //   handler: async (response) => {
  //     console.log("==3==Payment success:", response);
  //     console.log("payment response....");
  //     await dreturn(response);
  //     // _verifyOrder({ ...response, amount: data.amount, id: data.id, cartIds: data.cartIds });
  //     // _verifyOrder({ ...response });
  //   },
  // };

  //📍📍📍📍📍 LIVE MODE
  var options = {
    description: "Test payment updated",
    image: Logo,
    currency: "INR",
    key_id: "rzp_live_WkeN2d0mSH4ztR",
    key_secret: "0A55ZisFpioDw3so0Cox1dSj",
    amount: 2000,
    name: "Fines",
    order_id: orderId,
    prefill: {
      email: "",
      contact: "",
      name: "",
    },
    theme: { color: "#3399cc" },
    handler: async (response) => {
      console.log("==3==Payment success:", response);
      console.log("payment response....");
      await dreturn(response);
      // _verifyOrder({ ...response, amount: data.amount, id: data.id, cartIds: data.cartIds });
      // _verifyOrder({ ...response });
    },
  };
  const rzpay = new Razorpay(options);
  rzpay.on("payment.failed", function (response) {
    console.log("payment failed....", response);
  });
  rzpay.open();
}
