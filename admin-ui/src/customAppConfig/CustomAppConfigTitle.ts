import { CustomAppConfig as TCustomAppConfig } from "../api/customAppConfig/CustomAppConfig";

export const CUSTOMAPPCONFIG_TITLE_FIELD = "name";

export const CustomAppConfigTitle = (record: TCustomAppConfig): string => {
  return record.name || String(record.id);
};
