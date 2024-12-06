import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('DB_STRING'));
        return {
          uri: configService.get('DB_STRING'),
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
