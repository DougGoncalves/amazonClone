const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hhc8FHSBapjLfgBZG9llmPHOHFWQtV05xG5t7DLKpgFD4NMsffX8N9JSc9RSK6T3qh7NfQFweCpPNuL1pz4EX8E00zPEWyoWE');

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//API routes
app.get('/', (req, res) => res.status(200).send('ITs ALIVE'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  
})

//Listen command
exports.api=functions.https.onRequest(app)
