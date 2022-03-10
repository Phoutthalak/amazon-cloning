const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KbcvzGpU9pd4BKgc14dLUzSRKDoF9l9QF4EpAbs3igastVyNaDoVyVD7iGZauRZsiYUXW855jIjCytMTevTL3m000N16jaSPR"
);

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("hello"));

app.post("/payments/create", async (request, reponse) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    payment_method_types: ["card"],
  });

  //OK-status created
  reponse.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen command
exports.api = functions.https.onRequest(app);

//Example endpoit
//http://localhost:5001/challenge-844c3/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
