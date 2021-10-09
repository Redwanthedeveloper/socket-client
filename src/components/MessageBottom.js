import React from 'react';

const MessageBottom = () => {
  return (
    <div className='h-full px-5 rounded-br-2xl w-full'>
      <form className='flex items-center gap-3'>
        <div className='flex-1'>
          <input
            id='message'
            name='message'
            type='text'
            className='appearance-none w-full rounded-lg relative block h-full px-3 py-4 border border-gray-800 placeholder-gray-500 text-gray-300 focus:outline-none focus:ring-none focus:border-none focus:z-10 sm:text-sm bg-gray-700'
            placeholder='Email address'
          />
        </div>
        <div>
          <button
            type='submit'
            className='group relative py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageBottom;
