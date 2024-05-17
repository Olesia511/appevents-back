import Event from "../models/Events.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

export const getEventsWithTotalCount = async (page, limit) => {
  try {
    const skip = (page - 1) * limit;
    const result = await Event.aggregate([
      {
        $facet: {
          data: [{ $skip: skip }, { $limit: Number(limit) }],
          totalCount: [{ $count: "count" }],
        },
      },
      {
        $project: {
          data: 1,
          totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
        },
      },
    ]);

    return result[0];
  } catch (error) {
    console.error("Error aggregating documents:", error);
  }
};

const getEventsNextPage = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const result = await getEventsWithTotalCount(page, limit);

  res.json(result);
};

export default {
  getEventsNextPage: ctrlWrapper(getEventsNextPage),
};
