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

  filteredData = data.filter(
    (d) =>
      d.name.first.toLowerCase().includes(filter.toLowerCase()) ||
      d.login.username.toLowerCase().includes(filter.toLowerCase()) ||
      d.name.last.toLowerCase().includes(filter.toLowerCase()) ||
      d.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="overflow">
      <div className="container mt-3">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="insira nome, email ou username"
            onChange={e => setFilter(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div
            type="button"
            className="w-full sm:w-auto px-5 py-2.5"
          >
          </div>
        </div>
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
                id={u._id}
                isClient={false}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-items-center mt-5">
        <div className="flex row ml-auto mr-auto items-baseline">
          <span>Página: </span>
          <select
            onChange={(e) => {
              setPageNumber(e.target.value);
              fetchData(e.target.value, results);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
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
