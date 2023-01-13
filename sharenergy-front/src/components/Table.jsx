import React, { useEffect, useState } from "react";
import TableLine from "./TableLine";
import "./table.css";
import axios from "axios";

function Table(props) {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setResults] = useState(5);
  const [filter, setFilter] = useState("");

  async function fetchData(page, result) {
    const endpointMain = `https://randomuser.me/api/?page=${page}&results=${parseInt(
      result
    )}&seed=abc`;
    await axios
      .get(endpointMain)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    return () => fetchData(pageNumber, results);
  }, []);

  let filteredData = [];
  const [asc, setAsc] = useState(0);

  filteredData = data.filter(
    (d) =>
      d.name.first.toLowerCase().includes(filter.toLowerCase()) ||
      d.location.country.toLowerCase().includes(filter.toLowerCase()) ||
      d.name.last.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="overflow">
      <div className="container mt-3">
        <table className="table table-striped min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-4 py-2 text-left"
              ></th>
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
                Usuario
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-4 py-2 text-center"
              >
                Idade
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((u) => (
              <TableLine
                key={`${u.name.first} ${u.name.last}`}
                user={u.login.username}
                name={`${u.name.first} ${u.name.last}`}
                img={u.picture.thumbnail}
                email={`${u.email}`}
                birth={u.dob.age}
                id={u.login.uuid}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex row">
          <span>Página: </span>
          <select
            onChange={(e) => {
              setResults(e.target.value);
              fetchData(pageNumber, e.target.value);
            }}
          >
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex row">
          <span>Items por página: </span>
          <select
            onChange={(e) => {
              setResults(e.target.value);
              fetchData(pageNumber, e.target.value);
            }}
          >
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Table;
