import React from 'react';

function Square({ value }) {
  return <button className="square">{ value }</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
    </>
  );
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