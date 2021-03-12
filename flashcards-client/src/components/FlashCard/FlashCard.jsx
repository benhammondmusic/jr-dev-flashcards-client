import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlashCard = ({ card, idx }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* CARD FRONT  */}
      <div key="front" className={`rounded p-3 m-10 bg-yellow-100  text-yellow-900`} onClick={flipCard}>
        <small className="bg-gray-700 text-white">{card.topic}</small>
        <pre className="break-words whitespace-pre-wrap font-bold">{card.question} ?</pre>
        <pre className="break-words whitespace-pre-wrap">{card.choices}</pre>
      </div>
      {/* CARD BACK WITH ANSWER  */}
      <div key="back" className={`rounded p-3 m-10 bg-blue-900  text-gray-50`} onClick={flipCard}>
        <pre className="break-words whitespace-pre-wrap font-bold text-blue-200">{card.question} ?</pre>
        <pre className="break-words whitespace-pre-wrap ">{card.answer}</pre>
      </div>
    </ReactCardFlip>
  );
};

export default FlashCard;
