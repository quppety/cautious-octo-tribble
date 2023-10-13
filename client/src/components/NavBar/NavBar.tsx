import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  const getLinkClassName = (path: string): string => {
    const isActive = location.pathname === path;
    return `block rounded-md px-3 py-2 text-base font-medium ${
      isActive
        ? 'bg-yellow-500 text-white'
        : 'text-yellow-400 hover:bg-yellow-400 hover:text-white'
    }`;
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

            <div>
              <Link
                to={'/profile'}
                className="text-yellow-400 hover:bg-yellow-400 hover:text-blue-700 rounded-md px-3 py-2 mr-10 text-base font-medium"
              >
                Stats
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-[-20px]" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className={getLinkClassName('/')}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>

          <Link
            to={'/profile'}
            className={`${getLinkClassName('/profile')} w-full`}
            aria-current={location.pathname === '/profile' ? 'page' : undefined}
          >
            Stats
          </Link>
        </div>
      </div>
    </nav>
  );
}
