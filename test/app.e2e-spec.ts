import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { testCleanup, testInit } from 'test/common/test-lifetime';
import { DataSource } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let dataSource: DataSource;

  beforeAll(async () => {
    const [_app, _dataSource] = await testInit();
    app = _app;
    dataSource = _dataSource;
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect('OK!');
  });

  afterAll(async () => {
    await testCleanup(app, dataSource);
  });
});
