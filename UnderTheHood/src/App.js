import React, {useState} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] =useState(true);
  const toggleParagraphHandler = () => setShowParagraph(previousShowParagraph => !showParagraph);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <h2>I am a paragraph, I am. I am. I am.</h2>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
