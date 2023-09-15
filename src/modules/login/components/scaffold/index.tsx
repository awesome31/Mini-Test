import { LOGIN_STRINGS } from "../../constants/strings";
import useLogin from "../../hooks/use-login";
import LoginForm from "../form";
import { LoginScaffoldProps } from "./types";

const LoginScaffold = (props: LoginScaffoldProps) => {
  const data = useLogin();

  return (
    <div className="w-[463px] border-[2px] border-secondaryBorder bg-secondaryBlack rounded-lg py-10 px-4">
      <div className="text-sm text-headingText font-medium text-center">
        {LOGIN_STRINGS.welcomeBack}
      </div>
      <div className="text-primaryText font-semibold text-center">
        {LOGIN_STRINGS.loginIntoYourAccount}
      </div>
      <div className="h-10" />
      <LoginForm {...data} />
    </div>
  );
};

export default LoginScaffold;
