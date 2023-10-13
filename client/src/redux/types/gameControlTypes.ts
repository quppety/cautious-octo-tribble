import { Question, Topic } from '../../types';

export interface IGameControlState {
  topics: Topic[];
  checkedQuestions: number[];
  chosenQuestion: Question;
  currAnswer: string;
  userPoints: number;
  showModal: boolean;
  timer: number;
  stats: number[];
}
