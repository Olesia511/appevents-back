// import Event from "../models/Events";

// export const getEventsWithTotalCount = async (page, limit) => {
//   try {
//     const skip = (page - 1) * limit;
//     const result = await Event.aggregate([
//       {
//         $facet: {
//           data: [{ $skip: skip }, { $limit: limit }],
//           totalCount: [{ $count: "count" }],
//         },
//       },
//       {
//         $project: {
//           data: 1,
//           totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
//         },
//       },
//     ]);

//     return result[0];
//   } catch (error) {
//     console.error("Error aggregating documents:", error);
//   }
// };
