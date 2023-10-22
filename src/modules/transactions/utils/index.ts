import { TransactionProps } from "../components/transaction/types";
import { STRINGS } from "../constants";

const getColorTypeClass = (type: string) => {
  switch (type) {
    case "DEPOSIT":
      return "text-green-500";
    case "WITHDRAWAL":
      return "text-red-500";
    case "TRANSFER":
      return "text-blue-500";
    case "REFUND":
      return "text-yellow-500";
    case "INVESTMENT":
      return "text-purple-500";
    default:
      return "text-gray-500";
  }
};

//Logically it makes sense to remove the latest updated transaction in a ledger.
const removeDuplicateTransactions = (transactions: any[]) => {
  try {
    let visited: any = {};

    transactions.forEach((transaction) => {
      if (visited[transaction.activity_id]) {
        if (
          new Date(visited[transaction.activity_id].date).getTime() >
          new Date(transaction.date).getTime()
        ) {
          visited[transaction.activity_id] = transaction;
        }
      } else {
        visited[transaction.activity_id] = transaction;
      }
    });

    return Object.values(visited);
  } catch (e) {
    return transactions;
  }
};

const sortTransactionsByDate = (transcations: any[]) => {
  return transcations.sort((a, b) => {
    return (
      new Date(b.date).getTime() - new Date(a.date).getTime() ||
      b.activity_id - a.activity_id
    );
  });
};

//Michael Daugherty is the account holder. This function returns the account details of the other party in the transaction.
const getAccountDetails = (transaction: any) => {
  const sender = transaction.source.description;
  const receiver = transaction.destination.description;

  if (sender === "Michael Daugherty") {
    return receiver;
  }
  if (receiver === "Michael Daugherty") {
    return sender;
  }
};

const filterTransactions = (transactions: any[], filters: any) => {
  let filteredTransactions = transactions;

  if (filters.type !== "ALL") {
    filteredTransactions = filteredTransactions.filter(
      (t) => t.type === filters.type
    );
  }

  if (filters.credit) {
    filteredTransactions = filteredTransactions.filter((t) => t.amount > 0);
  }

  if (filters.debit) {
    filteredTransactions = filteredTransactions.filter((t) => t.amount < 0);
  }

  return filteredTransactions;
};

//Using HTML for better formatting of the description.
const getDescription = (t: any, account: string) => {
  const accountName = `<b>${account}</b>`;
  const unkown = `<b style="color:red;">${STRINGS.unknown}</b>`;

  const accountDescription = account ? accountName : unkown;

  switch (t.type) {
    case "DEPOSIT":
      return `Deposit of $${Math.abs(
        t.amount
      )} from ${accountDescription} into your account.`;
    case "WITHDRAWAL":
      return `${accountDescription} withdrew <b>$${Math.abs(
        t.amount
      )}</b> from your account.`;
    case "TRANSFER":
      return `${accountDescription} transferred <b>$${Math.abs(
        t.amount
      )}</b> to your account.`;
    case "REFUND":
      return `Refund of <b>$${Math.abs(
        t.amount
      )}</b> from ${accountDescription}`;
    case "INVESTMENT":
      return `Investment of <b>$${Math.abs(
        t.amount
      )}</b> done in ${accountDescription}`;
    default:
      return "Random description";
  }
};

const getTransactions = (
  transactions: any[],
  filters: any
): TransactionProps[] => {
  return filterTransactions(
    sortTransactionsByDate(removeDuplicateTransactions(transactions)),
    filters
  ).map((t) => {
    const account = getAccountDetails(t);

    return {
      id: t.activity_id,
      type: t.type,
      amount: t.amount,
      balance: t.balance,
      date: new Date(t.date).toLocaleDateString(),
      description: getDescription(t, account),
      account,
    };
  });
};

const getTypeFilters = (transactions: any[]) => {
  return ["ALL", ...Array.from(new Set(transactions.map((t) => t.type)))];
};

export {
  removeDuplicateTransactions,
  getTransactions,
  getColorTypeClass,
  getTypeFilters,
};
