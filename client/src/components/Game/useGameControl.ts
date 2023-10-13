import { ChangeEvent } from 'react';
import {
  clearGameData,
  setCheckedQuestions,
  setChosenQuestion,
  setCurrAnswer,
  setQuestions,
  setShowModal,
  setTimer,
  setTopics,
  setUserPoints,
} from '../../redux/gameControlSlice';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/types/hooks';
import { handleError } from '../../redux/sessionSlice';
import { useNavigate } from 'react-router-dom';

export const useGameControl = () => {
  const { questions, chosenQuestion, currAnswer, userPoints } = useAppSelector(
    (state: RootState) => state.gameControl
  );

  const user = useAppSelector((state: RootState) => state.session.username);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchGameData = () => {
    fetch('http://localhost:3000/api/game/topics')
      .then((response) => response.json())
      .then((data) => dispatch(setTopics(data)));

    fetch('http://localhost:3000/api/game/questions')
      .then((response) => response.json())
      .then((data) => dispatch(setQuestions(data)));
  };

  const handleOpenQuestion = (questionId: number): void => {
    const selectedQuestion = questions.find((el) => el.id === questionId);
    dispatch(setCheckedQuestions(questionId));

    if (selectedQuestion) {
      dispatch(setChosenQuestion(selectedQuestion));
      dispatch(setShowModal(true));
      dispatch(
        setQuestions(
          questions.map((question) =>
            question.id === questionId
              ? { ...question, answered: true }
              : question
          )
        )
      );
      dispatch(setTimer(10));
    }
  };

  const handleAnswerInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCurrAnswer(e.target.value));
  };

  const handleAnswer = (): void => {
    const lowerCaseCurr = currAnswer.toLowerCase();
    const lowerCaseCorr = chosenQuestion.answer.toLowerCase();

    if (lowerCaseCurr === lowerCaseCorr) {
      dispatch(setUserPoints(userPoints + chosenQuestion.points));
    } else {
      dispatch(setUserPoints(userPoints - chosenQuestion.points));
    }
    dispatch(
      setChosenQuestion({
        id: 0,
        question: '',
        answer: '',
        topicId: 0,
        points: 0,
        createdAt: '',
        updatedAt: '',
        answered: false,
      })
    );
    dispatch(setCurrAnswer(''));
    dispatch(setShowModal(false));
  };

  const handleGameEnd = async () => {
    const data = { points: userPoints };
    const response = await fetch(`http://localhost:3000/api/stats/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    if (response.status === 200) {
      navigate('/profile');
      dispatch(clearGameData());
    } else {
      dispatch(handleError({ message: 'Something went wrong, try later' }));
      setTimeout(() => {
        dispatch(handleError({ message: '' }));
      }, 1500);
    }
  };

  return {
    fetchGameData,
    handleOpenQuestion,
    handleAnswerInputChange,
    handleAnswer,
    handleGameEnd,
  };
};
