const express = require("express");
const bodyParser = require("body-parser");
const route = require("../src/route/route");
// const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://ShailabhSrivastava:LtR74yQBXKkSdvyd@cluster0.cxb6bki.mongodb.net/TRAIN",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.all("/*", function (req, res) {
  res.status(404).send({
    status: false,
    message: "Kindly give correct information in path param ! UNDERSTAND",
  });
});

app.listen(3000, function () {
  console.log("Express app running on port " + 3000);
});
