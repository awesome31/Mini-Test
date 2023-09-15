import Close from "@/src/assets/images/close";
import { LOGIN_STRINGS } from "../../constants/strings";
import useLogin from "../../hooks/use-login";
import LoginForm from "../form";
import { LoginModalScaffoldProps } from "./types";

const LoginModalScaffold = (props: LoginModalScaffoldProps) => {
  const { onCloseClick, onRegisterClick } = props;
  const data = useLogin();

  return (
    <div className="fixed h-full w-full bg-blackRgba2 top-0 z-100 flex justify-center items-center">
      <div className="w-[463px] border-[2px] border-secondaryBorder bg-secondaryBlack rounded-lg py-10 px-4 relative">
        <button className="absolute top-4 right-4" onClick={onCloseClick}>
          <Close />
        </button>
        <div className="text-sm text-headingText font-medium text-center">
          {LOGIN_STRINGS.welcomeBack}
        </div>
        <div className="text-primaryText font-semibold text-center">
          {LOGIN_STRINGS.loginIntoYourAccount}
        </div>
        <div className="h-10" />
        <LoginForm {...data} onRegisterClick={onRegisterClick} />
      </div>
    </div>
  );
};

export default LoginModalScaffold;
