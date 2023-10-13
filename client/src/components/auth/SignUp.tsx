import { useAppSelector } from '../../redux/types/hooks';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useAuthControl } from './useAuthControl';

export default function SignUp() {
  const { error } = useAppSelector((state: RootState) => state.session);

  const { signUpInputs } = useAppSelector(
    (state: RootState) => state.authControl
  );
  const { handleSignUp, handleSignUpInputsChange } = useAuthControl();

  return (
    <div className="flex h-4/5 flex-col justify-center px-6 py-12 lg:px-8 sm:py-8 sm:min-h-fit">
      <div className="mx-auto w-full max-w-sm">
        <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>
      {error && <p className="text-red-500 text-xl mt-5">{error}</p>}
      <div className="mt-10 mx-auto w-full max-w-sm">
        <form onSubmit={handleSignUp} id="reg-form" className="space-y-6">
          <div>
            <label
              htmlFor="username-reg"
              className="block text-sm font-semibold leading-6 text-gray-900 text-left"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username-reg"
                name="login"
                type="text"
                value={signUpInputs.login}
                required
                className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleSignUpInputsChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSignUp(e);
                  }
                }}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email-reg"
              className="block text-sm font-semibold leading-6 text-gray-900 text-left"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email-reg"
                name="email"
                type="email"
                autoComplete="email"
                value={signUpInputs.email}
                required
                className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleSignUpInputsChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSignUp(e);
                  }
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <label
                htmlFor="password-reg"
                className="block text-sm font-semibold leading-6 text-gray-900 text-left"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password-reg"
                name="password"
                type="password"
                value={signUpInputs.password}
                autoComplete="current-password"
                required
                className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleSignUpInputsChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSignUp(e);
                  }
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link
            to="/signin"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
