import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => { //definice komponenty, ktera je funkcionalni komponentou, pouzivajici Reakt hooks.
  
  //toto je funkcni komponenta, ktera prijima funkci handle login,
  //jako prop, coz je funkce pro zpracovani osobnich udaju.

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => { //tato funkce prijima udalost --event
    e.preventDefault(); //zamezi znovuobnoveni stranky
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
