import Close from "@/src/assets/images/close";
import { REGISTER_STRING } from "../../constants/strings";
import useRegister from "../../hooks/use-register";
import RegisterForm from "../form";
import { RegisterModalScaffoldProps } from "./types";

const RegisterModalScaffold = (props: RegisterModalScaffoldProps) => {
  const { onCloseClick, onLoginClick } = props;
  const data = useRegister();

  return (
    <div className="fixed h-full w-full bg-blackRgba2 top-0 z-100 flex justify-center items-center">
      <div className="w-[463px] border-[2px] border-secondaryBorder bg-secondaryBlack rounded-lg py-10 px-4 relative">
        <button className="absolute top-4 right-4" onClick={onCloseClick}>
          <Close />
        </button>

        <div className="text-sm text-headingText font-medium text-center">
          {REGISTER_STRING.signUp}
        </div>
        <div className="text-primaryText font-semibold text-center">
          {REGISTER_STRING.createAnAccountToContinue}
        </div>
        <div className="h-10" />
        <RegisterForm {...data} onLoginClick={onLoginClick} />
      </div>
    </div>
  );
};

export default RegisterModalScaffold;
