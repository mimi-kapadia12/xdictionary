import { useState } from "react";
import "./App.css";

const dict = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const HandleClick = () => {
    if (word) {
      const item = dict.find(
        (x) => x.word.toLowerCase() === word.toLowerCase()
      );
      if (item) setMeaning(item.meaning);
      else setMeaning("Word not found in the dictionary.");
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={HandleClick}>Search</button>
      </div>

      <b>Definition:</b>
      <p>{meaning}</p>
    </div>
  );
}

export default App;
