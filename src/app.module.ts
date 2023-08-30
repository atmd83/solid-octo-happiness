import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import { AppController } from './app.controller';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { WebhooksModule } from './webhooks/webhooks.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type :"sqlite",
        database: "local",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true
      }),
      AccountsModule,
      TransactionsModule,
      WebhooksModule
  ],
  controllers: [AppController]
})
export class AppModule {}
