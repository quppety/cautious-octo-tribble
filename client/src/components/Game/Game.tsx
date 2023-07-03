import React, { useEffect, useState } from "react";
import { Questions, Topics } from "../../types";

export default function GameStart() {
  const [allTopics, setAllTopics] = useState<Topics[]>([]);
  const [allQuestions, setAllQuestions] = useState<Questions[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/topics")
      .then((response) => response.json())
      .then((data) => setAllTopics(data));

    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => setAllQuestions(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-max">
        <tbody className="divide-y divide-blue-gray-200">
          {allTopics.map((topic) => (
            <tr key={topic.id} className="even:bg-blue-gray-50/50">
              <th className="p-4 bg-blue-gray-50">{topic.title}</th>
              {allQuestions.map((el) => (
                <td key={el.id} className="p-4">
                  {el.points}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
