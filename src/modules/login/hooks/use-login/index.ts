import { useRouter } from "next/navigation";
import { useState } from "react";

const useLogin = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const onEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const onLoginClick = () => {
    router.push("/home");
  };

  const onRegisterClick = () => {
    router.push("/register");
  };

  return {
    onPasswordChange,
    onUsernameChange,
    password,
    showPassword,
    username,
    onEyeClick,
    onLoginClick,
    onRegisterClick,
  };
};

export default useLogin;
