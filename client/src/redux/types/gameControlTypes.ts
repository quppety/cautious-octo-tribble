import { Question, Topic } from '../../types';

export interface IGameControlState {
  topics: Topic[];
  questions: Question[];
  checkedQuestions: number[];
  chosenQuestion: Question;
  currAnswer: string;
  userPoints: number;
  showModal: boolean;
  timer: number;
}
