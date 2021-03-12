const TopicSelect = ({ topics, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Topic:
        <select className="text-gray-700 mx-1" value={topics[0]} onChange={handleChange}>
          {topics.map((topic) => {
            return (
              <option key={topic} value={topic}>
                {topic}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
};

export default TopicSelect;
