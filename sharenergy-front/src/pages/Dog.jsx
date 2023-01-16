import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import Nav from "../components/Nav";
const Dog = (props) => {
  const [code, setCode] = useState("");
  const [vid, setVid] = useState(false);

  useEffect(() => {
    return () => fetchData();
  }, []);

  async function fetchData() {
    await axios
      .get("https://random.dog/woof.json")
      .then(function (response) {
        console.log(response.data.url);
        if (response.data.url.slice(-4) === ".mp4") {
          setVid(true);
        }
        setCode(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="bg-gray-800 pt-3 min-h-full">
      <Nav />
      <h2 className="ml-6 text-center text-3xl font-bold tracking-tight text-gray-100">
        Cachorro Aleatorio
      </h2>
      <div className="flex min-h-full items-center bg-gray-800 justify-center py-12 px-4 sm:px-6 lg:px-8">
        {vid ? <iframe src={code} /> : <img src={code} />}
      </div>
    </div>
  );
};

export default Dog;
