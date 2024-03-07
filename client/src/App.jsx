import React from 'react';
import './App.css';
import Header from './components/header';
import Cards from './components/cards';

function App() {

  return (
    <>
      <Header/>
      <div id='heading'>Homemade Delights Glossary</div>
      <hr />
      <main>
        <Cards/>
      </main>
    </>
  )
}

export default App
