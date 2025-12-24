const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");


const express = require("express");
const cors = require("cors");
require("dotenv").config();

setGlobalOptions({ maxInstances: 10 });

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "success!" });
});

app.post("/payments/create", async (req, res) => {
  try {
    const stripe = require("stripe")(process.env.STRIPE_KEY);

    // const total = parseInt(req.query.total);
    const total = Math.round(parseFloat(req.query.total) * 100);

    if (total > 0) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });

      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      res.status(400).json({ message: "Amount must be greater than 0" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
exports.api = onRequest(app);