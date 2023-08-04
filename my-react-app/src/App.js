import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <Header />
      <h1>Jednoduchá React aplikace</h1>
      <input type="text" value={text} onChange={handleChange} />
      <Footer />
    </div>
  );
}

export default App;
