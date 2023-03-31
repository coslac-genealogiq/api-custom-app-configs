import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomAppConfigWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  name?: StringNullableFilter;
  primaryColor?: StringNullableFilter;
  secondaryColor?: StringNullableFilter;
  tertiaryColor?: StringNullableFilter;
};
