import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, StatsType } from "../../types";

export default function Profile() {
  const user = useSelector((state: RootState) => state.SessionReducer.username);
  const [stats, setStats] = useState<StatsType[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/profile/${user}`)
      .then((response) => response.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="mx-10 py-36">
      <p className="block text-l font-medium leading-6 text-gray-900 m-5">
        Game statistics
      </p>
      <table className="mx-auto w-7/12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr
              key={stat.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {stat.createdAt.toString()}
              </th>
              <td className="px-6 py-4">{stat.total_points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
