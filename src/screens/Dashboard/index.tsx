import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Rightside from "./Rightside/Rightside";

type DashboardProps = {
  children?: React.ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <section className="lg:flex flex-row">
      <Sidebar />
      <Rightside />
    </section>
  );
};

export default Dashboard;
