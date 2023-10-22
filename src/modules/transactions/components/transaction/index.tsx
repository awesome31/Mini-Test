import { getColorTypeClass } from "../../utils";
import { TransactionProps } from "./types";

const Transaction = (props: TransactionProps) => {
  const { amount, balance, date, description, id, account, type } = props;

  const amountClass = amount > 0 ? "bg-green-200" : "bg-red-200";
  const typeClass = getColorTypeClass(type);

  return (
    <>
      <div className="col-span-1 border-t border-slate-300 p-4 text-sm">
        {date}
      </div>
      <div
        className={`col-span-2 border-t border-slate-300 p-4 text-sm ${typeClass} font-medium`}
      >
        {type}
      </div>
      <div className="col-span-2 border-t border-slate-300 p-4 text-sm">
        {account}
      </div>
      <div
        className="col-span-3 border-t border-slate-300 p-4 text-sm"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div
        className={`col-span-2 border-t border-slate-300 p-4 text-sm ${amountClass}`}
      >
        {amount}
      </div>
      <div className="col-span-2 border-t border-slate-300 p-4 text-sm">
        {balance}
      </div>
    </>
  );
};

export default Transaction;
