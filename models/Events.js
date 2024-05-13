import { Schema, model } from "mongoose";

const EventsSchema = new Schema({
  title: String,
  description: String,
  event_date: String,
  organizer: String,
});

const Event = model("events", EventsSchema);

export default Event;
