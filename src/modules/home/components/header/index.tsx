import { HOME_STRINGS } from "../../constants/strings";

const Header = () => {
  return (
    <div className="w-full">
      <div className="text-[28px] text-tertiaryText">
        {HOME_STRINGS.helloJane}
      </div>
      <div className="h-2" />
      <div className="text-secondaryText text-base">
        {HOME_STRINGS.howAreYouDoingToday}
      </div>
    </div>
  );
};

export default Header;
