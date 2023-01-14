import React from 'react';
import { FaEdit, FaEye, FaTimes } from 'react-icons/fa'
import { headers } from '../services/login';
import axios from 'axios';

function TableLine(props) {
    const { name, user, email, birth, gender, id, img, isClient } = props;
    
    async function deleteClient() {
      const endpointMain = `https://sharenergy-back.fly.dev/clientes/${id}`;
      await axios
        .delete(endpointMain, headers)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
    <tr className='border-b'>
        {img ? <td>
          <img className='user-img' src={ img }/>
        </td> : null }
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>{ name }</td>
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>{ email }</td>
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>{ user }</td>
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>{birth}</td>
        {isClient ? 
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>
          <button className='mr-3'><FaEye /></button>
          <button className='mr-3'><FaEdit /></button>
          <button className='mr-3' onClick={() => deleteClient()}><FaTimes /></button>
        </td>:null}
      </tr>
    )
}

export default TableLine;