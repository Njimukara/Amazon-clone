const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
('sk_test_51Hw66gDEJFnjUlzEnuUlKlCVAxI1Y8nyEd0TJbJQtv6yT13CDa577muC833OuBBygvPwoQTwqSCKxciaOE6XNjFj00XOMBRK8u');

// Building an API

// - App Config
const app = express();
// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - App Routes
app.get('/', (request, respnse) => {
    respnse.status(200).send('Hello World')
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app)