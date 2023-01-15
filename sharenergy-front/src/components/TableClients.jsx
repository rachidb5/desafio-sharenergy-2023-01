import React, { useContext } from "react";
import TableLine from "./TableLine";
import "./table.css";
import Context from "../context/context";

function TableClients(props) {
  const { data } = useContext(Context)  

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
            {data.map((u) => (
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
