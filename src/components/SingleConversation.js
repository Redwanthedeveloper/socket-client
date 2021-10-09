import React from 'react';

const SingleConversation = () => {
  return (
    <>
      <div className='single__conversation__wrapper flex flex-row items-center px-3 cursor-pointer hover:bg-gray-800 py-4 mb-1'>
        <img
          src='/images/nophoto.png'
          alt=''
          className='avatar rounded-full w-12'
        />
        <div className='message__wrapper flex flex-col ml-3 flex-1'>
          <div className='reciever__name font-medium text-gray-200 text-sm'>
            Redwanul
          </div>
          <div className='last__message text-gray-300 text-sm '>
            This is message
          </div>
        </div>
        <div className='last__message_time text-xs text-gray-400'>16 April</div>
      </div>
    </>
  );
};

export default SingleConversation;
