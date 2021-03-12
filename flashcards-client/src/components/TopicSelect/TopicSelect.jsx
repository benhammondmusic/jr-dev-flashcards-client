const TopicSelect = ({ topics, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Topic:
        <select className="text-gray-700" value={topics[0]} onChange={handleChange}>
          {topics.map((topic) => {
            return (
              <option key={topic} value={topic}>
                {topic}
              </option>
            );
          })}
          {/* <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option> */}
        </select>
      </label>
    </form>
  );
};

export default TopicSelect;
