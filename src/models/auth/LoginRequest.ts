export interface LoginRequest {
  userName: string;
  password: string;
}
export interface ResetPasswordRequest {
  email: string;
  oldPassword: string;
  newPassword: string;
}
