import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/types/hooks';

export default function Profile() {
  const { stats } = useAppSelector((state: RootState) => state.gameControl);

  return (
    <div className="mx-10 pt-24">
      <p className="block uppercase text-xl font-semibold leading-6 text-blue-700 m-5 mb-10">
        Game statistics
      </p>
      <div className=" overflow-y-auto max-h-96 w-5/12 mx-auto">
        <table className="mx-auto h-full w-full text-sm text-left text-gray-500 ">
          <thead className="text-md text-center text-yellow-300 uppercase bg-blue-600">
            <tr>
              <th scope="col" className="px-2 py-3 w-6/12">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, i) => (
              <tr key={i} className="bg-blue-200 border-b border-blue-400">
                <td className="px-2 py-4 text-center text-md font-medium text-blue-700 w-6/12">
                  {stat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
