import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Cat = (props) => {
    const [cat, setCat] = useState('')
    const [code, setCode] = useState(100)

    const fetchApi = async () =>{
        await axios.get(`https://http.cat/${code}`).then(function (response) {
            setCat(response)
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        fetchApi()
  return (
    <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <img src={cat}/>
    </div>
  )
};

export default Cat;
