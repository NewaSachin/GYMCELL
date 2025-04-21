// server.js
import express from "express"; // Changed to import
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const verifyEsewa = async ({ amt, pid, rid }) => {
  const params = new URLSearchParams();
  params.append("amt", amt);
  params.append("rid", rid);
  params.append("pid", pid);
  params.append("scd", "EPAYTEST");

  const res = await axios.post(
    "https://rc-epay.esewa.com.np/api/epay/transaction/status",
    params
  );

  return res.data.status === "COMPLETE";
};

app.get("/esewa/verify", async (req, res) => {
  const { amt, pid, rid } = req.query;

  try {
    const isValid = await verifyEsewa({ amt, pid, rid });
    if (isValid) {
      res.redirect("http://localhost:5173/payment-success");
    } else {
      res.redirect("http://localhost:5173/payment-failure");
    }
  } catch (err) {
    console.error("Error verifying eSewa payment:", err.message);
    res.redirect("http://localhost:5173/payment-failure");
  }
});

app.post("/esewa/fail", (req, res) => {
  res.redirect("http://localhost:5173/payment-failure");
});

app.listen(3000, () => {
  console.log("eSewa backend server running at http://localhost:3000");
});
