import { Schema, model } from "mongoose";
import { emptyObj, errStatus, updateOptions } from "../helpers/auditBody.js";

// ==============    model, Schema mongoose  =========

const addParticipantsSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthDay: {
      type: String,
      required: true,
    },
    placeInformation: {
      type: String,
      required: true,
    },
    idEvent: {
      type: Schema.Types.ObjectId,
      ref: "event",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

addParticipantsSchema.post("save", errStatus);

addParticipantsSchema.pre("findOneAndUpdate", updateOptions);
addParticipantsSchema.pre("findOneAndUpdate", emptyObj);

addParticipantsSchema.post("findOneAndUpdate", errStatus);

const Participant = model("participant", addParticipantsSchema);

export { Participant, addParticipantsSchema };
