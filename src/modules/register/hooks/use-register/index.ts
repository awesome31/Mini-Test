import { useRouter } from "next/navigation";
import { useState } from "react";

const useRegister = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const onLoginClick = () => {
    router.push("/login");
  };

  const onRegisterClick = () => {};

  return {
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
  };
};

export default useRegister;
