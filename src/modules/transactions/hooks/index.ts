import { useEffect, useState } from "react";
import COMPLICATED_DATA from "../../../data/complicated_ledger.json";
import DUPLICATE_DATA from "../../../data/duplicate_ledger.json";
import SIMPLE_DATA from "../../../data/simple_ledger.json";
import { getTypeFilters } from "../utils";

export const DATA_BY_TYPE: any = {
  COMPLICATED: COMPLICATED_DATA,
  DUPLICATE: DUPLICATE_DATA,
  SIMPLE: SIMPLE_DATA,
};

const useTransactions = () => {
  const [transactionType, setTransactionType] = useState<any>("COMPLICATED");
  const [typeFilters, setTypeFilters] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    type: "ALL",
    credit: false,
    debit: false,
    date: "",
  });

  useEffect(() => {
    setTypeFilters(getTypeFilters(DATA_BY_TYPE[transactionType]));
  }, [transactionType]);

  const onFilterChange = (name: string) => (value: string) => {
    if (name === "all") {
      setFilters({
        ...filters,
        credit: false,
        debit: false,
      });
      return;
    }
    if (name === "credit") {
      setFilters({
        ...filters,
        credit: !filters["credit"],
        debit: false,
      });
      return;
    }
    if (name === "debit") {
      setFilters({
        ...filters,
        debit: !filters["debit"],
        credit: false,
      });
      return;
    } else {
      setFilters({
        ...filters,
        [name]: value,
      });
    }
  };

  const onSelectALedgerClick = (e: any) => {
    setTransactionType(e.target.value);
  };

  return {
    transactionType,
    typeFilters,
    filters,
    onFilterChange,
    onSelectALedgerClick,
  };
};

export default useTransactions;
