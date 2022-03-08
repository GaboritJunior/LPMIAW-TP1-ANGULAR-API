import { Module } from '@nestjs/common';

import { UserService } from 'src/providers/user';

@Module({
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule {}
