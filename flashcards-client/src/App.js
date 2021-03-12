import { useEffect, useState } from 'react';
import FlashCard from './components/FlashCard/FlashCard.jsx';
import TopicSelect from './components/TopicSelect/TopicSelect.jsx';
import FlashCardActions from './Models/FlashCardActions';

function App() {
  const [availableTopics, setAvailableTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState(0);
  const [currentDeck, setCurrentDeck] = useState([]);

  const updateTopics = async () => {
    try {
      const response = await FlashCardActions.getTopics();
      // console.log(response.data.topics);
      setAvailableTopics(response.data.topics);
    } catch (error) {
      return console.log(error);
    }
  };

  const updateDeck = async (topicStr) => {
    try {
      const response = await FlashCardActions.getTopicCards(topicStr);
      // console.log(response.data);
      setCurrentDeck(response.data);
    } catch (error) {
      return console.log(error);
    }
  };

  // ONE PAGE LOAD: call API and get avail topics, then set deck from API call to first topic
  useEffect(() => {
    const asyncLoadTopicsAndDeck = async () => {
      await updateTopics();
      // console.log(availableTopics[0], 'first topic at page load');
      updateDeck(availableTopics[0]);
    };

    // use fn to allow async for proper API call loading
    asyncLoadTopicsAndDeck();
  }, []);

  // display all cards from topic, with question and choices
  // each card can be clicked to flip and replace choices with answer
  // would be nice to add an (x) which records idx to an ignoredCards array in local storage

  return (
    <div className="App flex flex-col h-screen">
      <header className="py-5 bg-gray-700 text-white flex justify-between p-5">
        <h1>Jr Dev Flashcards</h1>
        <nav>
          <TopicSelect topics={availableTopics} />
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-5">
        {currentDeck.map((card) => {
          return <FlashCard card={card} />;
        })}
      </main>
      <footer className="py-5 bg-gray-700 flex justify-center text-white p-5">
        <a href="https://benhammond.tech">benhammond.tech</a>
      </footer>
    </div>
  );
}

export default App;
