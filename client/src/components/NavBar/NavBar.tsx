import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/types/hooks';
import { signOutUserThunk } from '../../redux/thunks/thunkActionsAuth';
import { RootState } from '../../redux/store';

export default function NavBar() {
  const user = useAppSelector((state: RootState) => state.session.username);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClassName = (path: string): string => {
    const isActive = location.pathname === path;
    return `block rounded-md px-3 py-2 text-base font-medium ${
      isActive
        ? 'bg-yellow-500 text-white'
        : 'text-yellow-400 hover:bg-yellow-400 hover:text-white'
    }`;
  };

  const handleLogout = async (): Promise<void> => {
    dispatch(signOutUserThunk());
    navigate('/');
  };

  return (
    <nav className="bg-blue-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="md:hidden sm:hidden flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <Link
              to="/"
              className="text-yellow-400 hover:bg-yellow-400 hover:text-blue-700 rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            {user ? (
              <div>
                <Link
                  to={'/profile'}
                  className="text-yellow-400 hover:bg-yellow-400 hover:text-blue-700 rounded-md px-3 py-2 mr-10 text-base font-medium"
                >
                  {user}
                </Link>
                <button
                  className="text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-blue-700 rounded-md px-3 py-2 text-base font-medium"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/signin"
                  className="text-yellow-400 hover:bg-yellow-400 hover:text-blue-700 rounded-md mr-10 px-3 py-2 text-base font-medium"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="text-yellow-400 hover:bg-yellow-400 hover:text-blue-700 rounded-md px-3 py-2 text-base font-medium"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/*
 Mobile menu, show/hide based on menu state. */}
      <div className="lg:hidden mt-[-20px]" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className={getLinkClassName('/')}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                to={'/profile'}
                className={`${getLinkClassName('/profile')} w-full`}
                aria-current={
                  location.pathname === '/profile' ? 'page' : undefined
                }
              >
                {user}
              </Link>
              <button
                className="w-full rounded-md px-3 py-2 text-base font-medium bg-transparent"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className={getLinkClassName('/signin')}
                aria-current={
                  location.pathname === '/signin' ? 'page' : undefined
                }
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className={getLinkClassName('/signup')}
                aria-current={
                  location.pathname === '/signup' ? 'page' : undefined
                }
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
