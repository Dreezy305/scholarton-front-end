import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

type DashboardProps = {
  children?: React.ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <section className="lg:flex flex-row">
      <Topbar />
      <Sidebar />
    </section>
  );
};

export default Dashboard;
