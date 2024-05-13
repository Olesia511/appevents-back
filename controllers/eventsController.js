import Event from "../models/Events.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const getAll = async (req, res) => {
  const result = await Event.find();
  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
};
