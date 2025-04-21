const express = require("express");
const router = express.Router();
const Subsriber = require("../models/Subscriber");
const Subscriber = require("../models/Subscriber");

//@route POST /api/subscribe
//@desc Handle newsletter subscription
//@ access Public

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is Required" });
  }
  try {
    //Check if email is already subscribed
    let subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      return res.status(400).json({ message: "Email is Already Subscribed " });
    }

    //Create a new Subsriber
    subscriber = new Subscriber({ email });
    await subscriber.save();

    res
      .status(201)
      .json({ message: "Successfully Subscribed to the newsletters" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
