import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/types/hooks';
import { RootState } from '../../redux/store';
import { useAuthControl } from './useAuthControl';

export default function SignIn() {
  const { error } = useAppSelector((state: RootState) => state.session);
  const { signInInputs } = useAppSelector(
    (state: RootState) => state.authControl
  );
  const { handleSignIn, handleSignInInputsChange } = useAuthControl();

  return (
    <div className="flex h-4/5 flex-col justify-center px-6 pt-12 lg:px-8 sm:py-8 sm:min-h-fit">
      <div className="mx-auto w-full max-w-sm">
        <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {error && <p>{error}</p>}
      <div className="mt-10 mx-auto w-full max-w-sm">
        <form id="log-form" className="space-y-6">
          <div>
            <label
              htmlFor="email-log"
              className="block text-sm font-semibold leading-6 text-gray-900 text-left"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email-log"
                name="email"
                type="email"
                autoComplete="email"
                value={signInInputs.email}
                required
                className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleSignInInputsChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSignIn(e);
                  }
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="pass-log"
                className="block text-sm font-semibold leading-6 text-gray-900 text-left"
              >
                Password
              </label>
              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                id="pass-log"
                name="password"
                type="password"
                value={signInInputs.password}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleSignInInputsChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSignIn(e);
                  }
                }}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          First time?{' '}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
