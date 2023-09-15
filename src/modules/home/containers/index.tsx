"use client";

import LoginModalScaffold from "../../login/components/modal-scaffold";
import RegisterModalScaffold from "../../register/components/modal-scaffold";
import CreatePost from "../components/create-post";
import Header from "../components/header";
import PostList from "../components/post-list";
import useHome from "../hook/use-home";

const HomeContainer = () => {
  const {
    modalType,
    onCloseClick,
    onLoginClick,
    onPostClick,
    onRegisterClick,
  } = useHome();

  const renderModal = () => {
    switch (modalType) {
      case "login":
        return (
          <LoginModalScaffold
            onCloseClick={onCloseClick}
            onRegisterClick={onRegisterClick}
          />
        );
      case "register":
        return (
          <RegisterModalScaffold
            onCloseClick={onCloseClick}
            onLoginClick={onLoginClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      {renderModal()}
      <div className="w-[700px]">
        <Header />
        <div className="h-10" />
        <CreatePost onPostClick={onPostClick} />
        <div className="h-10" />
        <PostList />
      </div>
    </div>
  );
};

export default HomeContainer;
