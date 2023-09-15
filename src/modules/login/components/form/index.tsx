import Input from "@/src/common-components/input";
import PrimaryButton from "@/src/common-components/primary-button";
import { LOGIN_STRINGS } from "../../constants/strings";
import { LoginFormProps } from "./types";

const LoginForm = (props: LoginFormProps) => {
  const {
    onPasswordChange,
    onUsernameChange,
    password,
    showPassword,
    username,
    onEyeClick,
    onLoginClick,
    onRegisterClick,
  } = props;

  return (
    <div className="w-full">
      <Input
        label={LOGIN_STRINGS.emailOrUsername}
        value={username}
        onChange={onUsernameChange}
      />
      <div className="h-4" />
      <Input
        label={LOGIN_STRINGS.password}
        subLabel={{ text: LOGIN_STRINGS.forgotPassword, action: () => {} }}
        onEyeClick={onEyeClick}
        value={password}
        onChange={onPasswordChange}
        type={showPassword ? "password" : "text"}
      />
      <div className="h-5" />
      <PrimaryButton text={LOGIN_STRINGS.loginNow} onClick={onLoginClick} />
      <div className="h-3" />
      <div>
        <div className="text-secondaryText text-sm">
          {LOGIN_STRINGS.notRegisteredYet}{" "}
          <span className="text-tertiaryText text-sm">
            <button onClick={onRegisterClick}>
              {LOGIN_STRINGS.registerArrow}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
