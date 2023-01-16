import React, { useContext } from "react";
import TableClients from "../components/TableClients";
import NewClient from "../components/NewClient";
import Nav from "../components/Nav";
import Context from "../context/context";
import Loading from "../components/Loading";
import { ToastContainer, toast } from 'react-toastify';

const Clients = (props) => {
  const { loadingTable, setLoadingTable } = useContext(Context);

  return (
    <div className="bg-gray-800 pt-3 min-h-full">
      <Nav />
      <div className="flex min-h-full items-center bg-gray-800 justify-center py-12 px-4 sm:px-6 lg:px-8">
        {loadingTable ? (
          <Loading />
        ) : (
          <div className="p-5 flex flex-col bg-gray-100">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <NewClient />
                <div className="overflow-hidden">
                  <TableClients />
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
