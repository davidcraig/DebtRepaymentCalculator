import useDebts from "../stores/debts";
import { RenderCurrency } from "./RenderCurrency";

export function DebtSummary() {
  const { debts, getMaxMonths, getTotalBalance } = useDebts();

  return (
    <>
      {debts.length > 0 && (
        <div className="debt-summary">
          <h2 className="text-2xl my-4">Debt Summary</h2>
          It will take {getMaxMonths()} months to pay off all your debts. Your
          total debt balance is {RenderCurrency(getTotalBalance(), "font-bold")}
          .
        </div>
      )}
    </>
  );
}

export default DebtSummary;
