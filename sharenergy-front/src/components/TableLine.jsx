import React from 'react';

function TableLine(props) {
    const { name, user, email, birth, gender, id, img } = props;
    return (
    <tr className='border-b'>
        <td>
          <img className='user-img' src={ img }/>
        </td>
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>{ name }</td>
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>{ email }</td>
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>{ user }</td>
        <td className='text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap'>{birth}</td>
      </tr>
    )
}

export default TableLine;