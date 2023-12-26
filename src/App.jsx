import React from "react";
import Entry from "./Components/Entry";
import emojipedia from "./assets/emojipedia";

function addTerms(akd) {
  //The parameter can be any name
  return (
    <Entry
      key={akd.id}
      emoji={akd.emoji}
      name={akd.name}
      meaning={akd.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(addTerms)}
        {/* It's like each object of the emojipedia array will be passed as a parameter in the addTerms function*/}
      </dl>
    </div>
  );
}

export default App;
