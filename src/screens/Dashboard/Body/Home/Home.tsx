import React from "react";
import Dashboard from "../..";

interface summaryProps {
  id?: number;
  amount?: string;
  title?: string;
}

const Home = () => {
  const summaryDetails: summaryProps[] = [
    { id: 1, amount: "20", title: "Project Completed" },
    { id: 2, amount: "50", title: "Modules completed" },
    { id: 3, amount: "03", title: "Categories Completed" },
    { id: 4, amount: "20", title: "Approved by Instructor" },
  ];

  return (
    <Dashboard title="Home">
      <div className="container mx-auto overflow-hidden mt-5 pt-5 pb-6 mb-5">
        <div className="mx-auto flex flex-row justify-center items-center space-x-10">
          {summaryDetails.map((i) => {
            return (
              <div
                className="bg-white rounded-2xl flex flex-col space-y-7 items-center text-center h-40 w-60 border border-solid pt-8"
                key={i.id}
              >
                <h4 className="font-MontserratBold font-semibold text-4xl leading-10">
                  {i.amount}
                </h4>
                <p className="font-MontserratMedium font-medium text-xl leading-5">
                  {i.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Dashboard>
  );
};

export default Home;
