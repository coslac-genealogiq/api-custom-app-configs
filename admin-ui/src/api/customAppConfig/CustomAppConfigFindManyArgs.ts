import { CustomAppConfigWhereInput } from "./CustomAppConfigWhereInput";
import { CustomAppConfigOrderByInput } from "./CustomAppConfigOrderByInput";

export type CustomAppConfigFindManyArgs = {
  where?: CustomAppConfigWhereInput;
  orderBy?: Array<CustomAppConfigOrderByInput>;
  skip?: number;
  take?: number;
};
