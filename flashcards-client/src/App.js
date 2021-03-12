import FlashCard from './components/FlashCard/FlashCard.jsx';

function App() {
  // header
  // app title - credit
  // dropdown with topic options

  // main
  // display all cards from topic, with question and choices
  // each card can be clicked to flip and replace choices with answer
  // would be nice to add an (x) which records idx to an ignoredCards array in local storage

  // footer
  // credit to github with questions. link to benhammond.tech

  return (
    <div className="App flex flex-col h-screen">
      <header className="py-5 bg-gray-700 text-white flex justify-between p-5">
        <h1>Jr Dev Flashcards</h1>
        <nav>Dropdown to select topic</nav>
      </header>
      <main className="flex-1 overflow-y-auto p-5">
        <FlashCard />
      </main>
      <footer className="py-5 bg-gray-700 flex justify-between text-white p-5">
        <a href="https://benhammond.tech">benhammond.tech</a>
      </footer>
    </div>
  );
}

export default App;
