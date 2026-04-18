const express = require("express");
const router = express.Router();
const feedbackController = require("../../controller/userController/feedbackController");

// Path: /submit-feedback
router.post("/submit-feedback", feedbackController.postFeedback);

module.exports = router;
