export enum AuthActionType {
  LogIn,
  LogOut,
  RetriveData,
}

export type LoginPayload = {
  username: string;
  role: string;
  token: string;
  save: boolean;
};

export type AuthAction =
  | {
      type: AuthActionType.LogIn;
      payload: LoginPayload;
    }
  | {
      type: AuthActionType.LogOut;
    };
