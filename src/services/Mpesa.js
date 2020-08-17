import { Client } from '@paymentsds/mpesa'

const client = new Client({
   apiKey: process.env.Mpesa_apiKey,        // API Key
   publicKey: process.env.Mpesa_publicKey,  
   serviceProviderCode: "171717", // input_ServiceProviderCode

   origin: 'localhost:8080',
   host: 'localhost:8080',
   userAgent:'MPesa',

   verifySSL: false,
   debugging: true,        
});


 const set_paymentData = async (from,reference,transaction,amount)=>{
      
    const paymentData = {
        from: from,               // input_CustomerMSISDN
        reference: reference +  Math.floor(Math.random()*100),              // input_ThirdPartyReference
        transaction: transaction,          // input_TransactionReference
        amount: amount                    // input_Amount
     };

     client.receive(paymentData).then(r => {
      console.log(r)
        // Handle success scenario
     }).catch(e =>{
        console.log(e)
        // Handle success scenario
     });
 };

 export{
   set_paymentData
 }