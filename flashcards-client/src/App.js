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
      console.log('error in update topics');
      return console.log(error);
    }
  };

  const updateDeck = async (topicStr) => {
    try {
      console.log('topic string in update deck', topicStr);
      const response = await FlashCardActions.getTopicCards(topicStr);
      console.log(response.data);
      setCurrentDeck(response.data);
    } catch (error) {
      console.log('error in update deck');
      return console.log(error);
    }
  };

  const handleTopicChange = (e) => {
    console.log('topic change', e.target.value);
    setCurrentTopic(e.target.value);
  };

  // SIDE EFFECTS

  // ONE PAGE LOAD: call API and get avail topics, then set deck from API call to first topic
  useEffect(() => {
    const asyncLoadTopicsAndDeck = async () => {
      await updateTopics();
      console.log(availableTopics[0], 'first topic at page load');
      updateDeck(availableTopics[0]);
    };
    // use fn to allow async for proper API call loading
    asyncLoadTopicsAndDeck();
  }, []);

  // WHEN CURRENT TOPIC CHANGES, UPDATE CURRENT DECK
  useEffect(() => {
    updateDeck(currentTopic);
  }, [currentTopic]);

  // display all cards from topic, with question and choices
  // each card can be clicked to flip and replace choices with answer
  // would be nice to add an (x) which records idx to an ignoredCards array in local storage

  return (
    <div className="App flex flex-col h-screen">
      <header className="py-5 bg-gray-700 text-white flex justify-between p-5">
        <h1>Jr Dev Flashcards</h1>
        <nav>
          <TopicSelect topics={availableTopics} currentTopic={currentTopic} handleTopicChange={handleTopicChange} />
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-5">
        {currentDeck.map((card, idx) => {
          return <FlashCard key={idx} card={card} />;
        })}
      </main>
      <footer className="py-1 bg-gray-700 flex justify-center text-white p-5">
        <a href="https://benhammond.tech">benhammond.tech</a>
      </footer>
    </div>
  );
}

export default App;
