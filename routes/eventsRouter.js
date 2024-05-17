import express from "express";
import eventsController from "../controllers/eventsController.js";

const eventsRouter = express.Router();
eventsRouter.get(`/`, eventsController.getEventsNextPage);

export default eventsRouter;
