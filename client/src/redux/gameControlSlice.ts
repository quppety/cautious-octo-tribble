import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, Topic } from '../types';
import { IGameControlState } from './types/gameControlTypes';

const initialState: IGameControlState = {
  topics: [],
  questions: [],
  checkedQuestions: [],
  chosenQuestion: {
    id: 0,
    question: '',
    answer: '',
    topicId: 0,
    points: 0,
    createdAt: '',
    updatedAt: '',
    answered: false,
  },
  currAnswer: '',
  userPoints: 0,
  showModal: false,
  timer: 10,
};

const rtkSlice = createSlice({
  name: 'gameControlSlice',
  initialState,
  reducers: {
    setTopics(state, action: PayloadAction<Topic[]>) {
      state.topics = action.payload;
    },
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
    },
    setCheckedQuestions(state, action) {
      state.checkedQuestions.push(action.payload);
    },
    setChosenQuestion(state, action: PayloadAction<Question>) {
      state.chosenQuestion = action.payload;
    },
    setCurrAnswer(state, action: PayloadAction<string>) {
      state.currAnswer = action.payload;
    },
    setUserPoints(state, action: PayloadAction<number>) {
      state.userPoints = action.payload;
    },
    setShowModal(state, action: PayloadAction<boolean>) {
      state.showModal = action.payload;
    },
    setTimer(state, action) {
      state.timer = action.payload;
    },
    clearGameData(state) {
      state.checkedQuestions = [];
      state.userPoints = 0;
      state.currAnswer = '';
    },
  },
});

export default rtkSlice.reducer;
export const {
  setTopics,
  setQuestions,
  setCheckedQuestions,
  setChosenQuestion,
  setCurrAnswer,
  setUserPoints,
  setShowModal,
  setTimer,
  clearGameData,
} = rtkSlice.actions;
