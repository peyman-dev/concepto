export default interface SearchStoreType {
        isTyping: boolean;
        searchQuery: string;
        isFullScreen: boolean;
        setIsFullScreen: (isFullScreen: boolean) => void;
        setSearchQuery: (query: string) => void;
        setIsTyping: (isTyping: boolean) => void;
        isWrittedSomething: () => boolean;
}

// const useSearchStore = create((set, get: any) => ({
//   isTyping: false,
//   searchQuery: "",
//   setSearchQuery: (query: string) => set({ searchQuery: query }),
//   setIsTyping: (isTyping: boolean) => set({ isTyping: isTyping }),


//   isWrittedSomething: () => get().searchQuery.length > 0,
// }));

// export default useSearchStore;
