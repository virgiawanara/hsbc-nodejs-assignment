import React from 'react';

const Create = () => {
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='w-1/4 border bg-gray-200 text-gray-900 p-5'>
        <form className='max-w-sm mx-auto'>
          <div className='mb-5'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Name:
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required=''
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Country:
            </label>
            <input
              type='password'
              id='password'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required=''
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='repeat-password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Age:
            </label>
            <input
              type='password'
              id='repeat-password'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required=''
            />
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
