import { StateShema } from 'app/providers/StoreProvider';

export const getLoginState = (state: StateShema) => state.loginForm;
