import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

//1. Create Entr(Card) Component
//2. Create props to replace the hardcoded data
//3a. Import the emojipedia const
//3. Map through the emokipedia array and render Entry components


function createCard(emojiTerm) {
  return (
    <Card 
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}

    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
