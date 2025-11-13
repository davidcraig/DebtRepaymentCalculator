import type { uuid } from "./uuid";

export type DebtType = "priority" | "non-priority";

export interface Debt {
  id: uuid;
  name: string;
  balance: number;
  interestRate: number;
  monthlyMinimumPayment: number;
  type: DebtType;
}
