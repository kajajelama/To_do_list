import React from 'react';

export default function Square() {
  return <button className="square">X</button>;
}


/*function App() {
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
}*/