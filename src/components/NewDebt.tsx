import useDebts from "../stores/debts";
import { uuid } from "../functions/uuid";
import type { DebtType } from "../interfaces/debt";

export function NewDebt() {
  const { addDebt } = useDebts();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const balance = Number(formData.get("amount"));
    const type = formData.get("type") as DebtType;
    const interestRate = Number(formData.get("interestRate"));
    const monthlyMinimumPayment = Number(formData.get("monthlyMinimumPayment"));

    addDebt({
      id: uuid(),
      name,
      balance,
      type,
      interestRate,
      monthlyMinimumPayment,
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-2xl">New Debt</h2>

      <label>
        Name:
        <input type="text" name="name" required />
      </label>

      <label>
        Balance:
        <input type="number" name="amount" step="0.01" required />
      </label>

      <label>
        Interest Rate:
        <input type="number" step="0.01" name="interestRate" required />
      </label>

      <label>
        Monthly Minimum Payment:
        <input
          type="number"
          step="0.01"
          name="monthlyMinimumPayment"
          required
        />
      </label>

      <label>
        Type:
        <select name="type">
          <option value="priority">Priority</option>
          <option value="non-priority">Non-Priority</option>
        </select>
      </label>

      <button type="submit">Add Debt</button>
    </form>
  );
}

export default NewDebt;
