import { IsString, IsNumber } from "class-validator";

export class CreateNinjaDto {

    @IsString()
    readonly name: string;

    @IsNumber()
    readonly age: number;

    @IsString({ each: true })
    readonly skills: string[];
}
