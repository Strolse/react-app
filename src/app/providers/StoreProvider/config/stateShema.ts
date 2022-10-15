import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateShema {
  counter: CounterSchema;
  user: UserSchema;
}
