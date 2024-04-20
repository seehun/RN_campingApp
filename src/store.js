import { create } from "zustand"; // create로 zustand를 불러옵니다.

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  user: {},
  initUserState: (data) => set({ user: data }),
}));

export default useStore;
