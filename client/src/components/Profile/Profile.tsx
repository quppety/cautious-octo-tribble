import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StatsType } from '../../types';
import { RootState } from '../../redux/store';

export default function Profile() {
  const user = useSelector((state: RootState) => state.session.username);
  const [stats, setStats] = useState<StatsType[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/stats/${user}`)
      .then((response) => response.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="mx-10 pt-24">
      <p className="block uppercase text-xl font-semibold leading-6 text-blue-700 m-5 mb-10">
        Game statistics
      </p>
      <div className=" overflow-y-auto max-h-96 w-7/12 mx-auto">
        <table className="mx-auto h-full w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-md text-center text-yellow-300 uppercase bg-blue-600">
            <tr>
              <th scope="col" className="px-2 py-3 w-6/12">
                Date
              </th>
              <th scope="col" className="px-2 py-3 w-6/12">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => (
              <tr
                key={stat.id}
                className="bg-blue-200 border-b border-blue-400"
              >
                <th
                  scope="row"
                  className="px-2 py-4 text-center text-md font-medium text-blue-700 whitespace-nowrap w-6/12"
                >
                  {new Date(stat.createdAt).toUTCString()}
                </th>
                <td className="px-2 py-4 text-center text-md font-medium text-blue-700 w-6/12">
                  {stat.totalPoints}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
