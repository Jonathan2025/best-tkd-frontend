// Essentially we want our application to recieve events as they occur on the stripe account 
// In our case, when a customer paid for an otder
// So to enable events you will need webhook endpoints

import mongooseConnect from "@/lib/mongoose"
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY) // connect to stripe with our key 

const webhookHandler = async(req,res) => {
  await mongooseConnect()



  // Code below taken from Stripe API Documentation on events 
  const sig = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}



export default webhookHandler