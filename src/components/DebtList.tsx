import useDebts from "../stores/debts";

function DebtList() {
  const { debts } = useDebts();

  return (
    <>
      {console.log(debts)}
      {!debts ||
        (debts.length === 0 && (
          <div>No debts found, use the form on the left to add some.</div>
        ))}
      {debts && debts.map((debt) => <div key={debt.id}>{debt.name}</div>)}
    </>
  );
}

export default DebtList;
