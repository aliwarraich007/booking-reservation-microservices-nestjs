import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as joi from 'joi';
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: ['.env.dev'],
      validationSchema: joi.object({
        DB_STRING: joi.string().required(),
      }),
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
