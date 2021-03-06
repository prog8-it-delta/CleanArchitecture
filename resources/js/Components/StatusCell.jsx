import React from 'react';

const StatusCell = ({ value }) => {
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${Number(value) === 1 ? 'bg-green-100' : 'bg-red-100'} ${Number(value) === 1 ? 'text-green-800' : 'text-red-800'}`}>
      {Number(value) === 1 ? 'Active' : 'Inactive'}
    </span>
  );
};

export default StatusCell;
