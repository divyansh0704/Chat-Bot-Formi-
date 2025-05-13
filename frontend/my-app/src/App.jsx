import React, { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const askQuestion = async () => {
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="App">
      <h2>🍽 Barbeque Nation Chatbot</h2>
      <input
        type="text"
        value={question}
        
        onChange={e => {
          const value = e.target.value;
          setQuestion(value);
          if (value.trim() === '') setAnswer('');
        }}
        placeholder="Ask your question..."
      />
      <button onClick={askQuestion}>Ask</button>
      <p><strong>Answer:</strong> {answer}</p>
    </div>
  );
}

export default App;
