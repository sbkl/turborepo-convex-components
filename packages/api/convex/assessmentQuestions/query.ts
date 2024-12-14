import { query } from "../_generated/server";
import { randomize } from "./aggregate";

export const getQuestions = query({
  args: {},
  handler: async (ctx) => {
    return await randomize.random(ctx);
  },
});
