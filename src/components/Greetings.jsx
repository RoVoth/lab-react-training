import React from 'react';

const Greetings = ({ lang, children }) => {
  return (
    <div className="idMessage">
      <p>{lang === 'de' ? `Hallo ${children}` : ''}</p>
      <p>{lang === 'es' ? `Hola ${children}` : ''}</p>
      <p>{lang === 'en' ? `Hello ${children}` : ''}</p>
      <p>{lang === 'fr' ? `Bonjour ${children}` : ''}</p>
    </div>
  );
};

export default Greetings;
