import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {loggedIn ? (
          <h1>Vítejte, {username}!</h1> //vyuziti ternary operators v ramci reaktu. 
        ) : (
          <LoginForm handleLogin={handleLogin} />
        )}
        <p>
          {loggedIn ? (
            'Jste úspěšně přihlášeni.'
          ) : (
            <>
              Nemáte účet? <a href="/signup">Zaregistrujte se</a>.
            </>
          )}
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default App;