import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Read Paragraph Word Counter</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
