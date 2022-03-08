import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty } from "class-validator";
export class Task {
    @ApiProperty()
    name: String;

    @ApiProperty()
    description?: String;
}
export class Skill {
    @ApiProperty()
    id?: String;

    @ApiProperty()
    name: String;

    @ApiProperty()
    description?: String;

    @ApiProperty({
        type: 'array', items: {
            type: 'object', properties: {
                name: {
                    type: 'string',
                },
                description: {
                    type: 'string'
                }
            }
        }
    })
    tasks?: Task[];
}