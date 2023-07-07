import { create } from "zustand";

interface SearchStore {
  search: string;
  setSearch: (query: string) => void;
}

const useSearch = create<SearchStore>((set) => ({
  search: "",
  setSearch: (query) => set({ search: query }),
}));

export default useSearch;
