import { STRINGS } from "../../constants";
import { FiltersProps } from "./types";

const Filters = (props: FiltersProps) => {
  const { typeFilters, onFilterChange, onSelectALedgerClick } = props;

  const renderTypeOption = (filter: any) => {
    return (
      <option value={filter} key={filter}>
        {filter}
      </option>
    );
  };

  const handleTypeFilterChange = (event: any) => {
    onFilterChange("type")(event.target.value);
  };

  return (
    <div className="p-4 w-full border-r-slate-300 border-l-slate-300 border flex flex-row items-center">
      <label>
        <span className="font-medium mr-2">{STRINGS.filterByType}</span>
        <select
          name="selectedFruit"
          defaultValue="ALL"
          className="px-2 py-1 border border-slate-300 rounded-lg"
          onChange={handleTypeFilterChange}
        >
          {typeFilters.map(renderTypeOption)}
        </select>
      </label>
      <button
        className="px-3 py-1 bg-slate-600 ml-8 rounded-full text-white font-medium text-sm"
        /**@ts-ignore */
        onClick={onFilterChange("credit")}
      >
        {STRINGS.showOnlyCredit}
      </button>
      <button
        className="px-3 py-1 bg-slate-600 ml-4 rounded-full text-white font-medium text-sm"
        /**@ts-ignore */
        onClick={onFilterChange("debit")}
      >
        {STRINGS.showOnlyDebit}
      </button>
      <button
        className="px-3 py-1 bg-slate-600 ml-4 rounded-full text-white font-medium text-sm"
        /**@ts-ignore */
        onClick={onFilterChange("all")}
      >
        {STRINGS.allTransactions}
      </button>
      <div className="flex-1" />
      <label className="ml-8">
        <span className="font-medium mr-2">{STRINGS.selectLedger}</span>
        <select
          name="selectedFruit"
          defaultValue="ALL"
          className="px-2 py-1 border border-slate-300 rounded-lg"
          onChange={onSelectALedgerClick}
        >
          {["COMPLICATED", "DUPLICATE", "SIMPLE"].map(renderTypeOption)}
        </select>
      </label>
    </div>
  );
};

export default Filters;
