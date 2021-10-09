import React from 'react';
import SearchBar from './SearchBar';
import SingleConversation from './SingleConversation';

const Conversations = () => {
  return (
    <div className='conversation__wrapper flex flex-col w-1/4 md:w-1/3 bg-gray-700 h-full rounded-l-2xl'>
      <SearchBar />
      <SingleConversation />
    </div>
  );
};

export default Conversations;
