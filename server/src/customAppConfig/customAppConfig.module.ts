import { Module } from "@nestjs/common";
import { CustomAppConfigModuleBase } from "./base/customAppConfig.module.base";
import { CustomAppConfigService } from "./customAppConfig.service";
import { CustomAppConfigController } from "./customAppConfig.controller";
import { CustomAppConfigResolver } from "./customAppConfig.resolver";

@Module({
  imports: [CustomAppConfigModuleBase],
  controllers: [CustomAppConfigController],
  providers: [CustomAppConfigService, CustomAppConfigResolver],
  exports: [CustomAppConfigService],
})
export class CustomAppConfigModule {}
