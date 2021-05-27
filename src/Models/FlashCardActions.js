import axios from 'axios';

// const API_SERVER = 'http://localhost:3001';
const API_SERVER = 'https://jr-dev-flashcards.herokuapp.com'; // 'http://localhost:3001';

class FlashCardActions {
  // get all FlashCard Topics
  static getTopics = () => axios.get(`${API_SERVER}/api/topics`);

  // get all FlashCards from a topic
  static getTopicCards = (topicStr) => axios.get(`${API_SERVER}/api/topics/${topicStr}`);

  // get a specific individual FlashCard from a topic
  static getTopicCardByIdx = (topicStr, flashCardIdx) => axios.get(`${API_SERVER}/api/topics/${topicStr}/${flashCardIdx}`);
}

export default FlashCardActions;
