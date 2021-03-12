const TopicSelect = ({ topics, currentTopic, handleTopicChange }) => {
  return (
    <label>
      Topic:
      <select className="text-gray-700 mx-1" value={currentTopic} onChange={handleTopicChange}>
        {topics.map((topic) => {
          return (
            <option key={topic} value={topic}>
              {topic}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default TopicSelect;
