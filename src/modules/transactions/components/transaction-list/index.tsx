import { STRINGS } from "../../constants";
import Transaction from "../transaction";
import TransactionHeader from "../transaction-header";
import { TransactionProps } from "../transaction/types";
import { TransactionListProps } from "./types";

const TransactionList = (props: TransactionListProps) => {
  const { transactions } = props;

  const renderTransaction = (transaction: TransactionProps) => {
    return <Transaction {...transaction} key={transaction.id} />;
  };

  if (transactions.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center p-10">
        <div className="w-full h-full rounded-md border-slate-300 border text-3xl flex justify-center items-center font-bold">
          {STRINGS.nothingToSeeHere}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-12 border-slate-300 border rounded-b-lg overflow-scroll">
        <TransactionHeader />
        {transactions.map(renderTransaction)}
      </div>
    </div>
  );
};

export default TransactionList;
