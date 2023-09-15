export interface RegisterFormProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  email: string;
  onEmailChange: (e: any) => void;
  username: string;
  onUsernameChange: (e: any) => void;
  password: string;
  onPasswordChange: (e: any) => void;
  showPassword: boolean;
  onEyeClick: () => void;
}
