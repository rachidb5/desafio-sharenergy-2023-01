import React, { useState, useEffect } from 'react';
import Context from './context';
import axios from 'axios';

function Provider({ children }) {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(2);
    const [filter, setFilter] = useState('');
    const [genderFilter, setGenderFilter] =useState('')
 
    useEffect(() => {
        const endpointMain = 'https://randomuser.me/api/?page=1&results=50&seed=abc';
        async function fetchData() {
          await axios.get(endpointMain).then(function (response) {
            setData(response.data.results)
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        fetchData()
      }, [])
      
      const context = {
        data,
        setData,
        pageNumber,
        setPageNumber,
        filter,
        setFilter,
        genderFilter,
        setGenderFilter
      };
    
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider