import React, { useState, useEffect } from "react";
import { codes } from "../services/cat";
import "./main.css";
import doge from '../assets/doge.jpg'
const Cat = (props) => {
  const [code, setCode] = useState(100);
  const [pic, setPic] = useState(100);
  const [catFound, setCatFound] = useState(0)

  const getPic = () => {
    if (code.length !== 3) {
      setCatFound(-1);
    }
    if (codes.filter(c => c.code === parseInt(code)).length === 0) {
      setCatFound(-1);
    } else {
      setCatFound(1)
      setPic(code)
    }
  };

  return (
    <div className="bg-gray-800 pt-3 min-h-full">
      <h2 className="ml-6 text-center text-3xl font-bold tracking-tight text-gray-100">
        Gato HTTP
      </h2>
      <div className="flex min-h-full items-center bg-gray-800 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex justify-center">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <input
                type="text"
                maxLength={3}
                placeholder="insira um código HTTP"
                onChange={(e) => setCode(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => getPic()}
              >
                Novo gato
              </button>
            </div>
          </div>
          {catFound === 1 ? <img src={`https://http.cat/${pic}`} />: null}
          {catFound === -1 ? <img src={doge} />: null}
        </div>
      </div>
    </div>
  );
};

export default Cat;
