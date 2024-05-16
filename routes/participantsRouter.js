import express from "express";
import participantsCtr from "../controllers/participantsController.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";

const router = express.Router();
router.post("/", isEmptyBody, participantsCtr.createParticipant);
router.get("/:id", participantsCtr.getAllParticipants);
export default router;
