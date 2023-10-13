import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/types/hooks';

export default function Main() {
  const user = useSelector((state: RootState) => state.session.username);
  const { checkedQuestions } = useAppSelector(
    (state: RootState) => state.gameControl
  );
  return (
    <div className="block py-48 justify-center align-middle sm:py-10 sm:mt-40">
      {user ? (
        <Link
          to="/topics"
          className="mx-auto my-12 justify-end hover:text-blue-700 hover:bg-yellow-400 bg-blue-700 text-yellow-400 rounded-md px-5 py-3 text-2xl font-semibold"
          type="button"
        >
          {checkedQuestions.length > 0 ? 'Continue Game' : 'New Game'}
        </Link>
      ) : (
        <>
          <Link to="/signin" className="text-blue-900">
            Sign in{' '}
          </Link>{' '}
          or{' '}
          <Link to="/signup" className="text-blue-900">
            {' '}
            sign up{' '}
          </Link>{' '}
          to play
        </>
      )}
    </div>
  );
}
