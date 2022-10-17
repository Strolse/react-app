import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateShema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
