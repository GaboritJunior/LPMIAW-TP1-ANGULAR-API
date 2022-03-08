import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateClientDto } from 'src/models/client.model';
import { Clients } from 'src/providers/clients';

@Controller('clients')
export class ClientsController {

    constructor(private clientsProvider: Clients) {

    }

    @Post()
    @HttpCode(201)
    create(@Body() payload: CreateClientDto) {
        return this.clientsProvider.create(payload);
    }
    
    @Get()
    @HttpCode(200)
    getAll() {
        return this.clientsProvider.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    getOne(@Param() params) {
        return this.clientsProvider.findOne(params.id);
    }

    @Put(':id')
    @HttpCode(200)
    updateOne(@Param() params, @Body() payload: CreateClientDto) {
        return this.clientsProvider.update(params.id, payload);
    }

    @Delete(':id')
    @HttpCode(204)
    deleteOne(@Param() params) {
        return this.clientsProvider.delete(params.id);
    }
}
