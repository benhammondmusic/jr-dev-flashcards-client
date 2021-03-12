const FlashCard = ({ card }) => {
  //   console.log(card);
  return (
    <div className=" rounded p-3 m-3 bg-yellow-100  text-gray-900 ">
      <small className="bg-gray-700 text-white">{card.topic}</small>
      <pre className="break-words whitespace-pre-wrap font-bold">{card.question} ?</pre>
      <pre className="break-words whitespace-pre-wrap">{card.choices}</pre>
    </div>
  );
};

export default FlashCard;
