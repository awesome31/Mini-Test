import { useState } from "react";

const useHome = () => {
  const [modalType, setModalType] = useState("");

  const onCloseClick = () => {
    setModalType("");
  };

  const onLoginClick = () => {
    setModalType("login");
  };

  const onRegisterClick = () => {
    setModalType("register");
  };

  const onPostClick = () => {
    setModalType("login");
  };

  return {
    modalType,
    onCloseClick,
    onLoginClick,
    onRegisterClick,
    onPostClick,
  };
};

export default useHome;
