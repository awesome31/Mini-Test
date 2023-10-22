import { STRINGS } from "../../constants";

const TransactionHeader = () => {
  return (
    <>
      <div className="col-span-1 px-4 py-6 font-bold text-lg italic underline">
        {STRINGS.date}
      </div>
      <div className="col-span-2 px-4 py-6 font-bold text-lg italic underline">
        {STRINGS.type}
      </div>
      <div className="col-span-2 px-4 py-6 font-bold text-lg italic underline">
        {STRINGS.account}
      </div>
      <div className="col-span-3 px-4 py-6 font-bold text-lg italic underline">
        {STRINGS.description}
      </div>
      <div className="col-span-2 px-4 py-6 font-bold text-lg italic underline">
        {STRINGS.amount}
      </div>
      <div className="col-span-2 px-4 py-6 font-bold text-lg italic underline">
        {STRINGS.balance}
      </div>
    </>
  );
};

export default TransactionHeader;
