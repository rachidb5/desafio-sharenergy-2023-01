import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";

const Dog = (props) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    return () => fetchData();
    }, []);
    
    async function fetchData() {
      await axios
        .get("https://random.dog/woof.json")
        .then(function(response) {
          console.log(response.data.url);
          setCode(response.data.url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  return (
    <div>
      <div>
        <img src={code} />
      </div>
    </div>
  );
};

export default Dog;
