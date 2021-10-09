import React from 'react';

const SearchBar = () => {
  const handleSubmit = (e) => {};

  return (
    <>
      <div className='search__wrapper'>
        <form className='my-8 ' onSubmit={handleSubmit}>
          <div className='px-3 flex flex-row relative'>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='w-full px-4 py-3 placeholder-gray-400 text-gray-200 font-medium focus:outline-none  sm:text-sm rounded-full bg-gray-600'
              placeholder='Search users'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
