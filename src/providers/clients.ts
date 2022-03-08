import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class Clients {

    private readonly clients = [];

    create(client) {
        const newClient = { ...client, id: uuidv4() };
        this.clients.push(newClient);
        return newClient;
    }

    findAll() {
        return this.clients;
    }

    findOne(id) {
        return this.clients.find(client => client.id === id);
    }

    update(id, client) {
        const index = this.clients.findIndex(client => client.id === id);
        if (index === -1) {
            return false;
        }
        let clientUpdated = { ...this.clients[index], ...client };
        this.clients[index] = clientUpdated;
        return clientUpdated;
    }

    delete(id) {
        const index = this.clients.findIndex(client => client.id === id);
        if(index === -1) {
            return false;
        }

        this.clients.splice(index, 1);
        return true;
    }
}
