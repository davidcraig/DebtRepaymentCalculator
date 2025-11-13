import useDebts from "../stores/debts";
import ucFirst from "../functions/ucFirst";

function DebtSchedule() {
  const { debts } = useDebts();

  return (
    <>
      {!debts ||
        (debts.length === 0 && (
          <div>No debts found, use the form on the left to add some.</div>
        ))}

      {debts && debts.length > 0 && (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Minimum Payment</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {debts.map((debt) => (
              <tr key={debt.id}>
                <td>{debt.name}</td>
                <td>{debt.balance}</td>
                <td>{debt.monthlyMinimumPayment}</td>
                <td>{ucFirst(debt.type)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default DebtSchedule;
