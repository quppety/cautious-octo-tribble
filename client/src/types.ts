export type Topic = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export interface Question {
  id: number;
  question: string;
  answer: string;
  topicId: number;
  points: number;
  answered?: boolean;
  createdAt: string;
  updatedAt: string;
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
