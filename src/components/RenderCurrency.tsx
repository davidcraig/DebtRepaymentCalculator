export function RenderCurrency(value: number) {
  return (
    <>{value.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}</>
  );
}

export default RenderCurrency;
