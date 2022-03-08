import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Skill } from 'src/models/skill.model';
import { Skills } from 'src/providers/skills';

@Controller('skills')
export class SkillsController {
    constructor(private skillsProvider: Skills) {}


    @Post()
    @HttpCode(201)
    create(@Body() payload: Skill) {
        return this.skillsProvider.create(payload);
    }

    @Get()
    @HttpCode(200)
    getAll() {
        return this.skillsProvider.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    getOne(@Param() params) {
        return this.skillsProvider.findOne(params.id);
    }

    @Put(':id')
    @HttpCode(200)
    updateOne(@Param() params, @Body() payload: Skill) {
        return this.skillsProvider.update(params.id, payload);
    }

    @Delete(':id')
    @HttpCode(204)
    deleteOne(@Param() params) {
        return this.skillsProvider.delete(params.id);
    }
}
