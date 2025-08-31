import mongoose from "mongoose";
interface financialRecordSchema {
  userID: string;
  date: Date;
  description: string;
  amount: number;
  categrory: string;
  paymentMethod: string;
}

const financialRecordSchema = new mongoose.Schema<financialRecordSchema>({
  userID: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  categrory: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

const FinancialRecordModel = mongoose.model<financialRecordSchema>(
  "FinancialRecord",
  financialRecordSchema
);
export default FinancialRecordModel;
