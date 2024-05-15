import ctrlWrapper from "../helpers/ctrlWrapper.js";
import { Participant } from "../models/Participant.js";

const createParticipant = async (req, res) => {
  //   const { fullName,
  //       email,
  //       birthDay,
  //       placeInformation,
  //         idEvent } = req.user;
  console.log(`req`, req);

  const addedParticipant = await Participant.create({ ...req.body });
  res.status(201).json(addedParticipant);
};

export default {
  createParticipant: ctrlWrapper(createParticipant),
};
