export type Topic = { id: number; title: string; questions: Question[] };

export interface Question {
  id: number;
  question: string;
  answer: string;
  topicId: number;
  points: number;
  answered?: boolean;
}

export interface StatsType {
  id: number;
  userId: number;
  topicId: number;
  corr_answers: number;
  totalPoints: number;
  createdAt: string;
  updatedAt: string;
}
