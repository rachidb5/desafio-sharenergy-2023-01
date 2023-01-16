import React, { useContext } from "react";
import Table from "../components/Table";
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import Context from "../context/context";

const Main = (props) => {
  const { loadingTable } = useContext(Context);

  return (
    <div className="bg-gray-800 pt-3 min-h-full">
      <Nav />
      <h2 className="ml-6 text-center text-3xl font-bold tracking-tight text-gray-100">
        Página principal
      </h2>
      <div className="flex min-h-full items-center bg-gray-800 justify-center py-6 px-4 sm:px-6 lg:px-8">
        {(loadingTable ? <Loading />:
          <div
            className="p-5 flex flex-col bg-gray-100"
            style={{ overflowX: "hidden" }}
          >
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
