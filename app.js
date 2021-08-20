const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {
    meta: {
      data: {
        title: "Super site",
        description: "Metadata description",
      },
    },
  });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
