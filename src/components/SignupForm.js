import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAction } from '../actions/authActions';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.userRegister);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // prepare form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('avatar', avatar);

    dispatch(signupAction(formData));
  };

  return (
    <div className='min-h-full flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
      {/* {message && message.message ? toast.success(message.message) : ''} */}
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='text-center text-4xl font-black text-indigo-600'>
            Socket.io Client
          </h2>
          <h2 className='mt-2 text-center text-sm font-medium text-gray-400'>
            New User? signup here!
          </h2>
        </div>
        {loading ? (
          <div className='justify-center flex'>
            <span className='flex h-6 w-6'>
              <span className='animate-ping absolute inline-flex h-6 w-6 rounded-full bg-purple-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-6 w-6 bg-purple-500'></span>
            </span>
          </div>
        ) : (
          ''
        )}
        <form
          className='mt-8 space-y-6'
          onSubmit={handleSubmit}
          id='signup-form'
        >
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {error && error.name && (
              <p className='text-red-600 text-sm py-2'>{error.name.msg}</p>
            )}

            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && error.email && (
              <p className='text-red-600 text-sm py-2'>{error.email.msg}</p>
            )}
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && error.password && (
              <p className='text-red-600 text-sm py-2'>{error.password.msg}</p>
            )}

            <div>
              <label className='block text-sm font-normal text-gray-700'>
                Image
              </label>
              <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                <div className='space-y-1 text-center'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 48 48'
                    aria-hidden='true'
                  >
                    <path
                      d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div className='flex text-sm text-gray-600'>
                    <label
                      htmlFor='file-upload'
                      className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2  focus-within:ring-indigo-300'
                    >
                      <span>Upload a file</span>
                      <input
                        id='file-upload'
                        name='avatar'
                        type='file'
                        className='sr-only'
                        onChange={(e) => setAvatar(e.target.files[0])}
                      />
                    </label>
                    <p className='pl-1'>or drag and drop</p>
                  </div>
                  <p className='text-xs text-gray-500'>
                    PNG, JPG, JPEG up to 10MB
                  </p>
                </div>
              </div>
            </div>
            {error && error.avatar && (
              <p className='text-red-600 text-sm py-2'>{error.avatar.msg}</p>
            )}
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
