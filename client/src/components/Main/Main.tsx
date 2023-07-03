import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../types';

export default function Main() {
  const user = useSelector((state: RootState) => state.SessionReducer.username);

  return (
    <div className="py-48 justify-center align-middle">
      {user ? (
        <Link
          to="/topics"
          className="text-white bg-purple-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          type="button"
        >
          New Game
        </Link>
      ) : (
        <>
          <Link to="/signin">Sign in </Link> or{' '}
          <Link to="/signup"> sign up </Link> to play
          <img src="/img.jpg" alt="" className="mx-auto my-10" />
        </>
      )}
    </div>
  );
}
