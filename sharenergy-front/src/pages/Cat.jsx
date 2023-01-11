import React, { useState, useEffect } from "react";
import { codes } from "../services/cat";
import './main.css'

const Cat = (props) => {
  const [code, setCode] = useState(100);

  return (
    <div>
      <div>
        <select onChange={(e) => setCode(e.target.value)}>
          {codes.map((c) => (
            <option value={c.code}>
              {c.code} - {c.staus}
            </option>
          ))}
        </select>
        <img src={`https://http.cat/${code}`} />
      </div>
    </div>
  );
};

export default Cat;
