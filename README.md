# Generic Quiz Game

Welcome to the Generic Quiz Game repository! This is a web-based implementation of the classic TV quiz show, Jeopardy. Test your knowledge, challenge your friends, and have loads of fun.

## Live Demo

Check out the live demo of the Generic Quiz Game here: [Generic Quiz Game Demo](https://cautious-octo-tribble.vercel.app/)

## Features

- Engaging Jeopardy gameplay
- Multiple categories
- Interactive user interface
- Scorekeeping
- Mobile-responsive design

## Usage

- Choose a category and point value.
- A question will be revealed.
- Answer the question correctly within 15 seconds to gain points.
- Track your scores.

## For more functionality switch to main branch

This is a version without server/database. More information in the Readme file on the main branch.

## Configuration

You can customize the game by editing the `quizData.ts` file. Here, you can specify your own categories, questions, and answers.

```typescript
const topics: Topic[] = [
  {
    title: 'Category 1',
    questions: [
      {
        question: 'Question 1',
        answer: 'Answer 1',
        points: 100,
      },
      // Add more questions...
    ],
  },
  // Add more categories...
];
