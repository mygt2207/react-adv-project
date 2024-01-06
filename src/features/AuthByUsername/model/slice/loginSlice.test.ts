import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    const receiveResult = loginReducer(state as LoginSchema, loginActions.setUsername('Jane'));
    expect(receiveResult).toEqual({ username: 'Jane' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' };
    const receiveResult = loginReducer(state as LoginSchema, loginActions.setPassword('1234'));
    expect(receiveResult).toEqual({ password: '1234' });
  });
});
