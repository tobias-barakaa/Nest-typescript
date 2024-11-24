import { Inject, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';

@Module({
  imports: [UsersModule, AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
      entities: [User],
      host: 'chat',
      synchronize: true,
      port: 5432,
      username: 'post@123#',
      database: 'chat',
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
