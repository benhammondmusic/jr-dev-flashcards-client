import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlashCard = ({ card, idx }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      {/* CARD FRONT  */}
      <div key="front" className="lined shadow-lg p-3 mt-30 " onClick={flipCard}>
        <small className="bg-gray-700 text-white">{card.topic}</small>
        <pre className="break-words whitespace-pre-wrap font-bold">{card.question} ?</pre>
        <pre className="break-words whitespace-pre-wrap">{card.choices}</pre>
      </div>
      {/* CARD BACK WITH ANSWER  */}
      <div key="back" className="lined shadow-2xl rounded p-3 mt-70 " onClick={flipCard}>
        <small className="bg-gray-700 text-white">{card.topic}</small>
        <pre className="break-words whitespace-pre-wrap font-bold text-black bg-blue-200">{card.question} ?</pre>
        <pre className="break-words whitespace-pre-wrap">{card.answer}</pre>
      </div>
    </ReactCardFlip>
  );
};

export default FlashCard;
