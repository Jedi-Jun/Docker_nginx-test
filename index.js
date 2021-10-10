const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello Docker Novice Tutorial");
});

app.listen(port, () => console.log("Server is running on PORT: %d", port));
