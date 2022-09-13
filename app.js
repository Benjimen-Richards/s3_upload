const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "/.env") });
const port = process.env.PORT;
const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const multerUpload = require("./multerUploads/multerUpload");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use("/multer", multerUpload);


app.get("/", (req, res) => {
  res.send("Worked");
});


app.listen(port, () => console.log(`Server is on ${port}`));
