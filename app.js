const express = require("express");
const cors = require("cors");
const PriceRouter = require("./routes/pricing");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*"
  })
);

 app.use("/api/v1" ,PriceRouter)


app.get("/", (req, res) => {
  res.send("Price calculater Hello");
});



module.exports = app;