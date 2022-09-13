const bucketName = "";
const region = "";
const accessKeyId = "";
const secretAccessKey = "";
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const uploadFile = (file) => {
  const fileStream = fs.readFileSync(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    ContentType: file.mimetype,
    Key: Date.now() + "_" + file.originalname,
  };

  return s3.upload(uploadParams).promise();
};

exports.uploadFile = uploadFile;
