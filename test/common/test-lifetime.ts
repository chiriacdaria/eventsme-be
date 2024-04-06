import { Test, TestingModule } from '@nestjs/testing';
import { getDataSourceToken } from '@nestjs/typeorm';
import { AppModule } from 'src/app.module';
import { DataSource } from 'typeorm';
import { INestApplication } from '@nestjs/common';
import { DatabaseModule, TestDatabaseModule } from 'src/core/database';

/**
 * call this on beforeAll()
 */
export async function testInit() {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  })
    .overrideModule(DatabaseModule)
    .useModule(TestDatabaseModule)
    .compile();

  let app = moduleFixture.createNestApplication();
  app = await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());

  return [app, dataSource] as const;
}

/**
 * call this on afterAll()
 */
export async function testCleanup(
  app: INestApplication<any>,
  dataSource: DataSource,
) {
  await dataSource.dropDatabase();
  await app.close();
}
