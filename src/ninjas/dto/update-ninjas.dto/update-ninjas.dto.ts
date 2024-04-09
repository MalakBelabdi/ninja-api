import { PartialType } from "@nestjs/mapped-types";
import { CreateNinjaDto } from "../create-ninja.dto/create-ninja.dto";

export class UpdateNinjasDto extends PartialType(CreateNinjaDto){}
