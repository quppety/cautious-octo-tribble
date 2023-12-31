import { useGameControl } from './useGameControl';
import { useAppSelector } from '../../redux/types/hooks';
import { RootState } from '../../redux/store';

export default function AnswerModal() {
  const { handleAnswerInputChange, handleAnswer } = useGameControl();
  const { chosenQuestion, timer } = useAppSelector(
    (state: RootState) => state.gameControl
  );

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-400 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-blue-600 rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-white">
              {chosenQuestion.question}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="defaultModal"
              onClick={handleAnswer}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="font-semibold text-xl text-white">
              Time left to respond: {timer} sec
            </p>
            <input
              type="text"
              name="answer"
              placeholder="What is..."
              required
              className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              onChange={handleAnswerInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAnswer();
                }
              }}
            />
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="mx-auto font-semibold text-blue-700 bg-white hover:bg-blue-800  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleAnswer}
            >
              Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
