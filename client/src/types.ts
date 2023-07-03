import store from "./redux/store";

export type LoginInputs = {
  email: string;
  password: string;
};

export type SignupInputs = {
  login: string;
  email: string;
  password: string;
};

export type Topics = {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Questions = {
  id: number;
  question: string;
  answer: string;
  topic_id: number;
  points: number;
  createdAt: Date;
  updatedAt: Date;
};

export interface StatsType {
  id: number;
  user_id: number;
  topic_id: number;
  corr_answers: number;
  total_points: number;
  createdAt: Date;
  updatedAt: Date;
}

export type RootState = ReturnType<typeof store.getState>;
