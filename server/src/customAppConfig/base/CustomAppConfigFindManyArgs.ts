/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomAppConfigWhereInput } from "./CustomAppConfigWhereInput";
import { Type } from "class-transformer";
import { CustomAppConfigOrderByInput } from "./CustomAppConfigOrderByInput";

@ArgsType()
class CustomAppConfigFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomAppConfigWhereInput,
  })
  @Field(() => CustomAppConfigWhereInput, { nullable: true })
  @Type(() => CustomAppConfigWhereInput)
  where?: CustomAppConfigWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomAppConfigOrderByInput],
  })
  @Field(() => [CustomAppConfigOrderByInput], { nullable: true })
  @Type(() => CustomAppConfigOrderByInput)
  orderBy?: Array<CustomAppConfigOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CustomAppConfigFindManyArgs as CustomAppConfigFindManyArgs };
