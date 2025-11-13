export function RenderCurrency(value: number, className?: string) {
  return (
    <span className={`currency ${value == 0 ? "zero" : "value"} ${className}`}>
      {value.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}
    </span>
  );
}

export default RenderCurrency;
