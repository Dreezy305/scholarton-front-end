import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Rightside from "./Rightside/Rightside";

type DashboardProps = {
  children?: React.ReactNode;
  title?: string;
};

const Dashboard = ({ children, title }: DashboardProps) => {
  return (
    <section className="lg:flex flex-row">
      <Sidebar />
      <Rightside children={children} title={title} />
    </section>
  );
};

export default Dashboard;
