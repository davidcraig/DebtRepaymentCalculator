import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { uuid } from "../interfaces/uuid";
import type { Debt } from "../interfaces/debt";

interface DebtState {
  debts: Debt[];
  addDebt: (newDebt: Debt) => void;
  removeDebt: (id: uuid) => void;
  getMaxMonths: () => number;
  getTotalBalance: () => number;
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
      getMaxMonths: () => {
        const maxMonths = Math.max(
          ...useDebts
            .getState()
            .debts.map((debt) =>
              Math.ceil(debt.balance / debt.monthlyMinimumPayment),
            ),
        );
        return maxMonths > 0 ? maxMonths : 1;
      },
      getTotalBalance: () => {
        const totalBalance = useDebts
          .getState()
          .debts.reduce((acc, debt) => acc + debt.balance, 0);
        return totalBalance;
      },
    }),
    {
      name: "debts",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useDebts;
