const express = require("express");
const router = express.Router();

router.get("/api", (req, res, next) => {
  res.json({
    status: "success",
    message: "Parcel Pending API",
    data: { version_number: "v1.0.0" }
  });
  return next();
});

module.exports = router;
