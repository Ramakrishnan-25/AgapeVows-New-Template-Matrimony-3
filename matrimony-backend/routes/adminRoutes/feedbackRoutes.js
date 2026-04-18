const express = require("express");
const router = express.Router();
const feedbackController = require("../../controller/adminController/feedbackController");

// Path: /admin/feedback
router.get("/all-feedback", feedbackController.getAllFeedbacks);
router.put("/update-feedback/:id", feedbackController.updateFeedbackStatus);
router.delete("/delete-feedback/:id", feedbackController.deleteFeedback);

module.exports = router;
