import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { Clients } from './providers/clients';

import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { SkillsController } from './skills/skills.controller';
import { Skills } from './providers/skills';

@Module({
    imports: [AuthenticationModule, UsersModule],
    controllers: [AppController, ClientsController, SkillsController],
    providers: [AppService, Clients, Skills],
})
export class AppModule { }
