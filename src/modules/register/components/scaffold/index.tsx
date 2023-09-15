import { REGISTER_STRING } from "../../constants/strings";
import useRegister from "../../hooks/use-register";
import RegisterForm from "../form";
import { RegisterScaffoldProps } from "./types";

const RegisterScaffold = (props: RegisterScaffoldProps) => {
  const data = useRegister();

  return (
    <div className="w-[463px] border-[2px] border-secondaryBorder bg-secondaryBlack rounded-lg py-10 px-4">
      <div className="text-sm text-headingText font-medium text-center">
        {REGISTER_STRING.signUp}
      </div>
      <div className="text-primaryText font-semibold text-center">
        {REGISTER_STRING.createAnAccountToContinue}
      </div>
      <div className="h-10" />
      <RegisterForm {...data} />
    </div>
  );
};

export default RegisterScaffold;
