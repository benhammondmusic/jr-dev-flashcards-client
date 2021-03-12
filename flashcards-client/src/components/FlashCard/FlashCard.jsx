import { useState } from 'react';

const FlashCard = ({ card }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    showAnswer ? setShowAnswer(false) : setShowAnswer(true);
  };

  return (
    <div className=" rounded p-3 m-10 bg-yellow-100  text-gray-900 " onClick={toggleAnswer}>
      <small className="bg-gray-700 text-white">{card.topic}</small>
      <pre className="break-words whitespace-pre-wrap font-bold">{card.question} ?</pre>
      {!showAnswer ? <pre className="break-words whitespace-pre-wrap">{card.choices}</pre> : ''}
      {showAnswer ? <pre className="break-words whitespace-pre-wrap text-red-900">{card.answer}</pre> : ''}
    </div>
  );
};

export default FlashCard;
