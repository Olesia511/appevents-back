import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import { Participant } from "../models/Participant.js";

const createParticipant = async (req, res) => {
  const { email, idEvent } = req.body;
  const result = await Participant.find({ idEvent, email }, "-createdAt -updatedAt").populate("event", null, null, {
    strictPopulate: false,
  });
  if (result.length > 0) throw HttpError(409, "You are already registered for this event");

  if (result.length === 0) {
    const addedParticipant = await Participant.create({ ...req.body });
    res.status(201).json(addedParticipant);
  }
};

const getAllParticipants = async (req, res) => {
  const id = req.params.id;

  const allParticipants = await Participant.find({ idEvent: id }, "-createdAt -updatedAt").populate(
    "event",
    null,
    null,
    {
      strictPopulate: false,
    }
  );

  res.json(allParticipants);
};

export default {
  createParticipant: ctrlWrapper(createParticipant),
  getAllParticipants: ctrlWrapper(getAllParticipants),
};
