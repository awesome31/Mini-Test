import Input from "@/src/common-components/input";
import PrimaryButton from "@/src/common-components/primary-button";
import { REGISTER_STRING } from "../../constants/strings";
import { RegisterFormProps } from "./types";

const RegisterForm = (props: RegisterFormProps) => {
  const {
    onPasswordChange,
    onUsernameChange,
    password,
    showPassword,
    username,
    onEyeClick,
    onLoginClick,
    onRegisterClick,
    email,
    onEmailChange,
  } = props;

  return (
    <div className="w-full">
      <Input
        label={REGISTER_STRING.username}
        value={email}
        onChange={onEmailChange}
      />
      <div className="h-4" />
      <Input
        label={REGISTER_STRING.email}
        value={username}
        onChange={onUsernameChange}
      />
      <div className="h-4" />
      <Input
        label={REGISTER_STRING.password}
        subLabel={{ text: REGISTER_STRING.forgotPassword, action: () => {} }}
        onEyeClick={onEyeClick}
        value={password}
        onChange={onPasswordChange}
        type={showPassword ? "password" : "text"}
      />
      <div className="h-5" />
      <PrimaryButton
        text={REGISTER_STRING.continue}
        onClick={onRegisterClick}
      />
      <div className="h-3" />
      <div>
        <div className="text-secondaryText text-sm">
          {REGISTER_STRING.alreadyHaveAnAccount}{" "}
          <span className="text-tertiaryText text-sm">
            <button onClick={onLoginClick}>{REGISTER_STRING.loginArrow}</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
