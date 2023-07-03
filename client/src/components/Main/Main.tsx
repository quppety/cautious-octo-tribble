import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Main() {
  const user = useSelector((state) => state.SessionReducer.username);

  return (
    <div className="flex py-48 justify-center align-middle">
      {user ? (
        <button
          className="text-white bg-purple-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          type="button"
        >
          New Game
        </button>
      ) : (
        <>
          <Link to="/signin">Войдите</Link> или{" "}
          <Link to="/signup">зарегистрируйтесь</Link> чтобы начать игру
        </>
      )}
    </div>
  );
}
