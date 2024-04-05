import { FindUserByEmailHandler } from './find-user-by-email.handler';
import { FindUserByIdHandler } from './find-user-by-id.handler';

export const queryHandlers = [FindUserByEmailHandler, FindUserByIdHandler];
