const express = require("express");
const app = express();
const port = 3000;

function sumOfTwoNums(a, b) {
  return parseInt(a) + parseInt(b);
}
app.get("/", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const ans = sumOfTwoNums(a, b);
  res.send(ans.toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
