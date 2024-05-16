import ctrlWrapper from "../helpers/ctrlWrapper.js";
import { Participant } from "../models/Participant.js";

const createParticipant = async (req, res) => {
  const addedParticipant = await Participant.create({ ...req.body });
  res.status(201).json(addedParticipant);
};

const getAllParticipants = async (req, res) => {
  const { _id: idEvent } = req.params;
  // const { page = 1, limit = 20 } = req.query;

  // const skip = (page - 1) * limit;

  const allParticipants = await Participant.find(
    idEvent,
    "-createdAt -updatedAt"
    // { skip, limit }
  ).populate("event");

  res.json(allParticipants);
};

export default {
  createParticipant: ctrlWrapper(createParticipant),

  getAllParticipants: ctrlWrapper(getAllParticipants),
};
