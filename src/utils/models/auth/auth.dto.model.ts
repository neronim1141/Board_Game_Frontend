import { CurrentUser } from "./auth.model";

export interface LoginBody {
  username: string;
  password: string;
}
export interface LoginResponse {
  user: CurrentUser;
  token: string;
}

export interface SigninBody {
  username: string;
  password: string;
}
export interface SigninResponse {
  user: CurrentUser;
  token: string;
}
