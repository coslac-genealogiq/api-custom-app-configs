import { SortOrder } from "../../util/SortOrder";

export type CustomAppConfigOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  name?: SortOrder;
  primaryColor?: SortOrder;
  secondaryColor?: SortOrder;
  tertiaryColor?: SortOrder;
  updatedAt?: SortOrder;
};
