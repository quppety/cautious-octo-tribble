import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AnswerModal from './Modal';
import QuestionBtn from './QuestionBtn';
import { useGameControl } from './useGameControl';
import { useAppDispatch, useAppSelector } from '../../redux/types/hooks';
import { setTimer } from '../../redux/gameControlSlice';

export default function GameStart() {
  const { topics, questions, chosenQuestion, userPoints, showModal, timer } =
    useAppSelector((state: RootState) => state.gameControl);
  const { fetchGameData, handleAnswer, handleGameEnd } = useGameControl();
  const [handleAnswerCalled, setHandleAnswerCalled] = useState<boolean>(false);

  const { error } = useSelector((state: RootState) => state.session);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchGameData();
  }, []);

  useEffect(() => {
    const timerOut = setInterval(() => {
      if (timer === 0) {
        if (!handleAnswerCalled) {
          setHandleAnswerCalled(true);
          handleAnswer();
        }
        setHandleAnswerCalled(false);
        clearInterval(timerOut);
      } else {
        dispatch(setTimer(timer - 1));
      }
    }, 1000);

    return () => {
      clearInterval(timerOut);
    };
  }, [chosenQuestion, timer]);

  return (
    <div className="md:w-screen sm:w-screen sm:content-center">
      <span className="block uppercase text-2xl font-semibold leading-6 text-blue-700 my-10 md:mb-0 sm:mb-0">
        Your points: {userPoints}
      </span>
      {showModal && <AnswerModal />}
      <div className="sm:w-11/12 overflow-x-auto md:10/12 md:ml-2 md:mr-2 sm:ml-4 sm:mr-2 sm:content-center">
        <table className="mt-16 mx-auto md:w-11/12">
          <tbody className="w-full divide-y divide-blue-gray-200">
            {topics.map((topic) => (
              <tr key={topic.id} className="even:bg-blue-gray-50/50">
                <th className="p-4 sm:p-2 text-white text-xl bg-blue-700">
                  {topic.title}
                </th>
                {questions
                  .filter((el) => el.topicId === topic.id)
                  .map((el) => (
                    <QuestionBtn key={el.id} el={el} />
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 mb-[-15px] text-blue-700 font-semibold sm:mx-3">
        Click button below to finish the game and record your points
      </p>
      <button
        className="uppercase flex mx-auto my-9 justify-end text-blue-700 bg-yellow-400 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-xl font-medium"
        type="button"
        onClick={handleGameEnd}
      >
        End Game
      </button>
      {error && <p className="my-5 text-red-600">{error}</p>}
    </div>
  );
}
