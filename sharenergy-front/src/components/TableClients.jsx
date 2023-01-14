import React, { useEffect, useState } from "react";
import TableLine from "./TableLine";
import "./table.css";
import axios from "axios";
import { headers } from '../services/login'

function TableClients(props) {
  const [data, setData] = useState([]);

  async function fetchClients() {
    const endpointMain = `https://sharenergy-back.fly.dev/clientes`;
    await axios
      .get(endpointMain, headers)
      .then(function (response) {
        console.log(response)
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    return () => fetchClients();
  }, []);

  let filteredData = [];

  filteredData = data
  return (
    <div className="overflow">
      <div className="container mt-3">
        <table className="table table-striped min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-4 py-2 text-center"
              >
                Nome
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-4 py-2 text-center"
              >
                Email
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-4 py-2 text-center"
              >
                Telefone
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-4 py-2 text-center"
              >
                Endereço
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((u) => (
              <TableLine
                key={u._id}
                user={u.phone}
                name={u.name}
                img={ null }
                email={u.email}
                birth={u.address}
                id={u._id}
                isClient={true}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableClients;
