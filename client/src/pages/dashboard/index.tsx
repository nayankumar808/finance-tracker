import { useUser } from "@clerk/clerk-react";

export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-container">
      <div>
        <h1>Welcome {user?.firstName}! Here are your Finances</h1>
      </div>
    </div>
  );
};
