export interface LoginFormProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  username: string;
  onUsernameChange: (e: any) => void;
  password: string;
  onPasswordChange: (e: any) => void;
  showPassword: boolean;
  onEyeClick: () => void;
}
