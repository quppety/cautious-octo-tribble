import React, { useEffect, useState, ChangeEvent, MouseEvent } from 'react';
import { Questions, RootState, Topics } from '../../types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function GameStart() {
  const [allTopics, setAllTopics] = useState<Topics[]>([]);
  const [allQuestions, setAllQuestions] = useState<Questions[]>([]);
  const [chosenQuestion, setChosenQuestion] = useState([{}]);
  const [showModal, setShowModal] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  // надо чтобы прятался specific вопрос, а не все
  const [currAnswer, setCurrAnswer] = useState('');
  const [userPoints, setUserPoints] = useState(0);
  const [error, setError] = useState('');

  const user = useSelector((state: RootState) => state.SessionReducer.username);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/topics')
      .then((response) => response.json())
      .then((data) => setAllTopics(data));

    fetch('http://localhost:3000/questions')
      .then((response) => response.json())
      .then((data) => setAllQuestions(data));
  }, []);

  const handleOpenQuestion = (e: MouseEvent<HTMLButtonElement>) => {
    const currQuestionId = Number(e.target.getAttribute('data-question-id'));
    setChosenQuestion(allQuestions.filter((el) => el.id === currQuestionId));
    setShowModal(true);
    // здесь еще сделать что пропадает кнопка вопроса
  };

  const handleAnswerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrAnswer(e.target.value);
  };

  const handleAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    const lowerCaseCurr = currAnswer.toLocaleLowerCase();
    const lowerCaseCorr = chosenQuestion[0].answer.toLocaleLowerCase();
    if (lowerCaseCurr === lowerCaseCorr) {
      setUserPoints((prev) => prev + chosenQuestion[0].points);
    } else {
      setUserPoints((prev) => prev - chosenQuestion[0].points);
    }
    setShowModal(false);
    setShowQuestion(true);
  };

  const handleGameEnd = async (e: MouseEvent<HTMLButtonElement>) => {
    const data = { points: userPoints };
    const response = await fetch(`http://localhost:3000/game/${user}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    if (response.status === 200) {
      navigate(`/profile/${user}`);
    } else {
      setError('Something went wrong, try later');
    }
  };

  return (
    <div className="">
      <button
        className="flex mx-auto my-12 justify-end text-white bg-purple-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        type="button"
        onClick={handleGameEnd}
      >
        End Game
      </button>
      {error && <p>{error}</p>}
      <span className="block text-xl font-medium leading-6 text-gray-900 m-5">
        {userPoints}
      </span>
      {showModal && (
        <div
          id="defaultModal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-gradient-to-r from-white p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {chosenQuestion[0].question}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <input
                  type="text"
                  name="answer"
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  onChange={handleAnswerInput}
                />
              </div>

              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleAnswer}
                >
                  Answer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <table className="mx-auto my-24">
        <tbody className="divide-y divide-blue-gray-200">
          {allTopics.map((topic) => (
            <tr key={topic.id} className="even:bg-blue-gray-50/50">
              <th className="p-4 bg-blue-gray-50">{topic.title}</th>
              {allQuestions
                .filter((el) => el.topic_id === topic.id)
                .map((el) => (
                  <td key={el.id} className="p-4">
                    <button
                      type="button"
                      data-question-id={el.id}
                      disabled={showQuestion}
                      onClick={handleOpenQuestion}
                      className="disabled:opacity-0 disabled:pointer-events-none"
                    >
                      {el.points}
                    </button>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
