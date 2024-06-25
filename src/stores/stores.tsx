import { create } from 'zustand';

interface StoreState {
    name: string;
    gender: boolean | null;
    user: boolean;
    setName: (name: string) => void;
    setGender: (gender: boolean | null) => void;
    setUser: (user: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
    user: false,
    name: '',
    gender: null,
    setName: (name) => set(() => ({ name })),
    setGender: (gender) => set(() => ({ gender })),
    setUser: (user) => set(() => ({ user })),
}));

export default useStore;