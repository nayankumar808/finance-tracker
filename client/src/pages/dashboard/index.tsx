import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./Financial-record-form";
import { FinancialRecordList } from "./Financial-record-list";

export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-container">
      <div>
        <h1>Welcome {user?.firstName}! Here are your Finances</h1>
        <FinancialRecordForm />
        <FinancialRecordList />
      </div>
    </div>
  );
};
