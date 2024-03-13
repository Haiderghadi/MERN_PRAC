const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/interest", (req, res) => {
  const principle = parseInt(req.query.principle);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  const result = (principle * rate * time) / 100;

  res.send({ result });
  console.log(result);
});

app.listen(3000);
