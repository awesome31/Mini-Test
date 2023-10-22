import { STRINGS } from "../../constants";
import { BalanceProps } from "./types";

const Balance = (props: BalanceProps) => {
  const { balance } = props;

  //Here we have the name of the logged in user/investor.
  return (
    <div className="w-full h-20 border rounded-t-lg border-slate-300 flex px-4 flex-row items-center py-4">
      <div className="text-2xl">{STRINGS.currentBalance}</div>
      <div className="w-2" />
      <div className="font-bold tracking-wider text-2xl border-2 p-2 border-green-500">
        ${balance}
      </div>
    </div>
  );
};

export default Balance;
