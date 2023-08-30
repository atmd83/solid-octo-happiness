import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Test, TestingModule} from "@nestjs/testing";
import {Account} from "./entities/account.entity";

/*
  Because I am just hard seeding a DB and this is just a demo
  I am testing against the values in the seed, rather than seeding values here
  then testing the controller and service.

  While this test is called controller spec, its actually testing the
  controller routing and the underlying service all together.
 */

describe('AccountsController', () => {
  let controller: AccountsController;
  let service: AccountsService;

  beforeEach(async () => {
    const TypeORMMySqlTestingModule = (entities: any[]) =>
        TypeOrmModule.forRoot({
          type :"sqlite",
          database: "local",
          entities: [__dirname + "/**/*.entity{.ts,.js}"],
          synchronize: true
        });

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeORMMySqlTestingModule([Account]),
        TypeOrmModule.forFeature([Account]),
      ],
      providers: [AccountsService],
    }).compile();

    service = await module.get<AccountsService>(AccountsService);
    controller = new AccountsController(service);
  });

  describe('GetAccounts', () => {
    let expected;
    let got;

    beforeEach(async () => {
      expected = {meta: { count: 3}, accounts: []};
      got = await controller.getAccounts('1', {} as any);
    })

    it('should return the count of records returned', async () => {
      expect(got.meta.count).toBe(expected.meta.count);
    });
  });
});