import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { uuid } from "../interfaces/uuid";
import type { Debt } from "../interfaces/debt";

interface DebtState {
  debts: Debt[];
  addDebt: (newDebt: Debt) => void;
  removeDebt: (id: uuid) => void;
}

const useDebts = create<DebtState>()(
  persist(
    (set) => ({
      debts: [],
      addDebt: (newDebt) =>
        set((state) => ({ debts: [...state.debts, newDebt] })),
      removeDebt: (id: uuid) =>
        set((state) => ({
          debts: state.debts.filter((debt) => debt.id !== id),
        })),
    }),
    {
      name: "debts",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useDebts;
