import { create } from "zustand";
import SearchStoreType from "../types/search-store.type";

const useSearchStore = create<SearchStoreType>((set, get) => ({
  isTyping: false,
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setIsTyping: (isTyping: boolean) => set({ isTyping: isTyping }),

  isWrittedSomething: get()?.searchQuery?.length > 0,
}));

export default useSearchStore;
