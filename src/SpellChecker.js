import React, { useState } from 'react';
import Typo from 'typo-js';

const dictionary = new Typo('en_US',false, false,{
    dictionaryPath : "dictionaries"
}
);
function SpellChecker() {
  const [text, setText] = useState('');
  const [words, setWords] = useState([]);

  const handleTextChange = (e) => {
    const textValue = e.target.value;
    const wordArray = textValue.split(' ');
    setWords(wordArray.map((word) => ({
      text: word,
      isValid: dictionary.check(word),
    })));
    setText(textValue);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      {words.map((word, index) => (
        <span key={index} style={{ color: word.isValid ? 'black' : 'red' }}>
          {word.text}{' '}
        </span>
      ))}
    </div>
  );
}

export default SpellChecker;