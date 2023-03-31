import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomAppConfigService } from "./customAppConfig.service";
import { CustomAppConfigControllerBase } from "./base/customAppConfig.controller.base";

@swagger.ApiTags("customAppConfigs")
@common.Controller("customAppConfigs")
export class CustomAppConfigController extends CustomAppConfigControllerBase {
  constructor(
    protected readonly service: CustomAppConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
