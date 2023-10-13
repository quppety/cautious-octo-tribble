import { ChangeEvent } from 'react';
import { RootState } from '../../redux/store';
import {
  clearGameData,
  setCheckedQuestions,
  setChosenQuestion,
  setCurrAnswer,
  setShowModal,
  setStats,
  setTimer,
  setTopics,
  setUserPoints,
} from '../../redux/gameControlSlice';
import { useAppDispatch, useAppSelector } from '../../redux/types/hooks';
import { useNavigate } from 'react-router-dom';
import { topics } from '../../data/quizData';
import { Question } from '../../types';

export const useGameControl = () => {
  const { chosenQuestion, currAnswer, userPoints } = useAppSelector(
    (state: RootState) => state.gameControl
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchGameData = () => {
    dispatch(setTopics(topics));
  };

  const handleOpenQuestion = (questionData: Question): void => {
    const selectedQuestion = questionData;
    dispatch(setCheckedQuestions(questionData.id));
    console.log(selectedQuestion);
    if (selectedQuestion) {
      dispatch(setChosenQuestion(selectedQuestion));
      dispatch(setShowModal(true));
      dispatch(setTimer(15));
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
        answered: false,
      })
    );
    dispatch(setCurrAnswer(''));
    dispatch(setShowModal(false));
  };

  const handleGameEnd = () => {
    dispatch(setStats(userPoints));
    dispatch(clearGameData());
    navigate('/profile');
  };

  return {
    fetchGameData,
    handleOpenQuestion,
    handleAnswerInputChange,
    handleAnswer,
    handleGameEnd,
  };
};
