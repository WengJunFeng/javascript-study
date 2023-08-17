const express = require("express");
const app = express();

const { validateEmail } = require("myutil");
const port = process.env.PORT || 5000;

app.get("/validateEmail/:email", (req, res) => {
  const email = req.params.email;
  console.log(email);

  res.json({ valid: validateEmail(email) });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
