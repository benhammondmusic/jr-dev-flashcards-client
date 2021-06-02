import { useEffect, useState } from 'react';
import FlashCard from './components/FlashCard/FlashCard.jsx';
import TopicSelect from './components/TopicSelect/TopicSelect.jsx';
import FlashCardActions from './Models/FlashCardActions';

function App() {
  const [availableTopics, setAvailableTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState();
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
      const response = await FlashCardActions.getTopicCards(topicStr);
      // console.log(response.data);
      setCurrentDeck(response.data);
    } catch (error) {
      console.log('error in update deck');
      return console.log(error);
    }
  };

  const handleTopicChange = (e) => {
    setCurrentTopic(e.target.value);
  };

  // SIDE EFFECTS

  // ONE PAGE LOAD: call API and get avail topics, then set deck from API call to first topic
  useEffect(() => {
    const asyncLoadTopicsAndDeck = async () => {
      await updateTopics();
    };
    // use fn to allow async for proper async API call loading
    asyncLoadTopicsAndDeck();
  }, []);

  // WHEN TOPICS CHANGE, SET CURRENT TOPIC TO FIRST (SHOULD ONLY HAPPEN ON PAGE LOAD)
  useEffect(() => {
    if (availableTopics) setCurrentTopic(availableTopics[0]);
  }, [availableTopics]);

  // WHEN CURRENT TOPIC CHANGES, UPDATE CURRENT DECK
  useEffect(() => {
    if (currentTopic) updateDeck(currentTopic);
  }, [currentTopic]);

  // would be nice to add an (x) which records idx to an ignoredCards array in local storage

  return (
    <div className="App flex flex-col h-screen ">
      <header className="py-5 bg-gray-700 text-white flex justify-between p-5 align-middle">
        <div className="flex flex-col">
          <h1 className="text-lg">Jr Dev Flashcards</h1>
          <a href="https://benhammond.tech" className="text-xs lg:text-sm">
            by benhammond.tech
          </a>
        </div>

        <nav>
          <TopicSelect topics={availableTopics} currentTopic={currentTopic} handleTopicChange={handleTopicChange} />
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-5 justify-center">
        {currentDeck.map((card, idx) => {
          return <FlashCard key={idx} card={card} />;
        })}
      </main>
    </div>
  );
}

export default App;
