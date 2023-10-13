import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/types/hooks';

export default function Main() {
  const { checkedQuestions } = useAppSelector(
    (state: RootState) => state.gameControl
  );
  return (
    <div className="block py-48 justify-center align-middle sm:py-10 sm:mt-40">
       <h2 className="sm:my-0 my-10 text-lg font-semibold text-blue-700">
        Welcome to the Generic Quiz Game!
      </h2>
      <p className="mx-auto max-w-md italic text-blue-700 mb-2">
        This is a web-based implementation of the classic TV quiz show,{' '}
        <span className="font-semibold">Jeopardy!</span>.
      </p>
      <p className="mx-auto max-w-md italic text-blue-700 mb-10 sm:mb-12">
        Test your knowledge, challenge your friends,{' '}
        <span className="block"> and have loads of fun!</span>
      </p>
      <Link
        to="/topics"
        className="mx-auto my-12 justify-end hover:text-blue-700 hover:bg-yellow-400 bg-blue-700 text-yellow-400 rounded-md px-5 py-3 text-2xl font-semibold"
        type="button"
      >
        {checkedQuestions.length > 0 ? 'Continue Game' : 'New Game'}
      </Link>
    </div>
  );
}
