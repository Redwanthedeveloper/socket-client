import React from 'react';

const MessageTop = () => {
  return (
    <div className='flex flex-row justify-between items-center h-full bg-gray-800 px-5 rounded-tr-2xl'>
      <div className='flex gap-3 items-center'>
        <img
          src='/images/nophoto.png'
          alt=''
          className='avatar rounded-full w-8'
        />
        <span className='reciever__name font-medium text-gray-200 text-md'>
          Redwanul
        </span>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8 text-gray-400 cursor-pointer'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
        />
      </svg>
    </div>
  );
};

export default MessageTop;