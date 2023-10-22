"use client";

import Balance from "../components/balance";
import Filters from "../components/filters";
import TransactionList from "../components/transaction-list";
import useTransactions, { DATA_BY_TYPE } from "../hooks";
import { getTransactions } from "../utils";

const TransactionContainer = () => {
  const data = useTransactions();

  const transactionList = getTransactions(
    DATA_BY_TYPE[data.transactionType],
    data.filters
  );

  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-scroll">
      <div className="flex-1 w-full h-full flex justify-center items-center p-10 flex-col leading-4">
        <Balance balance={transactionList[0].balance.toLocaleString("en")} />
        <Filters {...data} />
        <TransactionList transactions={transactionList} />
      </div>
    </div>
  );
};

export default TransactionContainer;
