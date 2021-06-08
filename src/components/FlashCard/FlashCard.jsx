import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlashCard = ({ card, idx, startFlipped }) => {
  const [isFlipped, setIsFlipped] = useState(startFlipped);
  const [justLoaded, setJustLoaded] = useState(true);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (justLoaded) setJustLoaded(false);
    else localStorage.setItem(`${card.topic}${card.number}`, isFlipped ? 'flipped' : '');
  }, [isFlipped]);

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      {/* CARD FRONT  */}
      <div key="front" className="lined shadow-lg p-3 mt-30 " onClick={flipCard}>
        <small className="bg-gray-700 text-white p-1">
          {card.topic} {card.number} {startFlipped}
        </small>
        <pre className="break-words whitespace-pre-wrap font-bold">{card.question} ?</pre>
        <pre className="break-words whitespace-pre-wrap">{card.choices}</pre>
      </div>
      {/* CARD BACK WITH ANSWER  */}
      <div key="back" className="lined shadow-2xl rounded p-3 mt-70 " onClick={flipCard}>
        <small className="bg-gray-700 text-white p-1">
          {card.topic} {card.number} {startFlipped}
        </small>
        <pre className="break-words whitespace-pre-wrap font-bold text-black bg-blue-200">{card.question} ?</pre>
        <pre className="break-words whitespace-pre-wrap">{card.answer}</pre>
      </div>
    </ReactCardFlip>
  );
};

export default FlashCard;
