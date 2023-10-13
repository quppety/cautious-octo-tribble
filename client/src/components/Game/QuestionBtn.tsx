import { useGameControl } from './useGameControl';
import { Question } from '../../types';
import { useAppSelector } from '../../redux/types/hooks';
import { RootState } from '../../redux/store';

export default function QuestionBtn({ el }: { el: Question }) {
  const { checkedQuestions } = useAppSelector(
    (state: RootState) => state.gameControl
  );
  const { handleOpenQuestion } = useGameControl();

  return (
    <td className="p-4 bg-blue-500">
      <button
        className="text-yellow-300 text-2xl font-semibold hover:bg-yellow-400 hover:text-blue-700"
        key={el.id}
        type="button"
        data-question-id={el.id}
        onClick={() => {
          if (!el.answered) {
            handleOpenQuestion(el.id);
          }
        }}
      >
        {checkedQuestions.includes(el.id) ? '-' : el.points}
      </button>
    </td>
  );
}
