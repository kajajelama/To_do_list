import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tady byste odeslali přihlašovací údaje na server a ověřili byste je.
    // Pro ukázku použijeme pouze lokalní stav.

    // Nastavíme přihlášení jako úspěšné
    handleLogin(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Uživatelské jméno"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Heslo"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Přihlásit se</button>
    </form>
  );
};

export default LoginForm;
