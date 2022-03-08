import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateClientDto {
    @IsNotEmpty()
    @ApiProperty()
    name: String;

    @ApiProperty()
    description?: String;

    @ApiProperty()
    date?: String;
    
    @ApiProperty()
    type?: String;
}