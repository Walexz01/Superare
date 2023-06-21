import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
interface Props {
  question: string;
  answer: string;
}
const Faq = ({ question, answer }: Props) => {
  const [showAnswer, setSetshowAnswer] = useState(true);
  return (
    <div className="faq">
      <div className="question" onClick={() => setSetshowAnswer(!showAnswer)}>
        <span> {question}</span>
        {showAnswer ? <FaMinus /> : <FaPlus />}
      </div>
      {showAnswer && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Faq;