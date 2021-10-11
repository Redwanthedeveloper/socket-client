import React from 'react';
import MessageBottom from './MessageBottom';
import MessageMain from './MessageMain';
import MessageTop from './MessageTop';

const Messages = () => {
  return (
    <div className='flex-1 w-100'>
      <div className='flex-col flex h-full'>
        <div className='h-16'>
          <MessageTop />
        </div>
        <div className='flex-1 flex flex-col-reverse px-6 overflow-y-scroll'>
          <MessageMain />
        </div>
        <div className='h-20'>
          <MessageBottom />
        </div>
      </div>
    </div>
  );
};

export default Messages;
