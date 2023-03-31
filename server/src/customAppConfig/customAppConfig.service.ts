import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomAppConfigServiceBase } from "./base/customAppConfig.service.base";

@Injectable()
export class CustomAppConfigService extends CustomAppConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
