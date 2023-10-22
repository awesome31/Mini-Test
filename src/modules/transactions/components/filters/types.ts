export interface FiltersProps {
  typeFilters: any;
  onFilterChange: (name: string) => (value: string) => void;
  onSelectALedgerClick: (e: any) => void;
}
