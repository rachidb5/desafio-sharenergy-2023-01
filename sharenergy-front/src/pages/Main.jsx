import React from "react";
import Table from "../components/Table";
const Main = (props) => {
  return (
    <div className="flex min-h-full items-center bg-gray-800 justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="p-5 flex flex-col bg-gray-100">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <Table />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Main;
