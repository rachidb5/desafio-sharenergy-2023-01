import React from 'react';

function TableLine(props) {
    const { name, gender, birth, country, id } = props;
    return (
    <tr className='border-b'>
        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{ name }</td>
        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{ country }</td>
        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{ gender }</td>
        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{birth}</td>
        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
          <button className='btn btn-primary'>
              View
          </button>
        </td>
      </tr>
    )
}

export default TableLine;