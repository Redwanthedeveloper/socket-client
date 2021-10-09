import React from 'react';
import Conversations from '../components/Conversations';
import Header from '../components/Header';
import Messages from '../components/Messages';

const InboxScreen = () => {
  return (
    <div>
      <Header />
      <div className='chat__body__wrapper grid place-items-center align-center'>
        <div className='h-90v flex bg-gray-600 max-w-1000px w-full min-w-800px rounded-2xl chat__container'>
          <Conversations />
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default InboxScreen;
