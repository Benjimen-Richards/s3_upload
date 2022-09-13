const multer = require("multer");
const fs = require("fs");
const path = require("path");
const express = require("express");
const multerUpload = express.Router();
const S3 = require("aws-sdk/clients/s3");
const { uploadFile } = require("./s3");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
});

const upload = multer({ dest: "uploads/" });

multerUpload.post("/file", upload.single("image"), async (req, res) => {
  const file = req.file;
  const result = await uploadFile(file);
  // const description = req.body.description;
  console.log({ result });
  res.send(result);
});

module.exports = multerUpload;
