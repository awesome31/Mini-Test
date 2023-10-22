import { STRINGS } from "../../constants";

const Header = () => {
  return (
    <div className="w-full h-14 px-4 border-b border-b-slate-400 text-lg font-bold flex items-center">
      {STRINGS.equityList}
    </div>
  );
};

export default Header;
