import { TableAggregate } from "@convex-dev/aggregate";

import { components } from "../_generated/api";
import { DataModel } from "../_generated/dataModel";

export const randomize = new TableAggregate<{
  DataModel: DataModel;
  TableName: "questions";
  Key: null;
}>(components.randomQuestionAggregator, {
  sortKey: () => null,
});
