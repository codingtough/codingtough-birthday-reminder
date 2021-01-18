import React, { useState } from 'react';
import data from '../assets/data';
import List from './List';

function App() {

  const [people, setPeople] = useState(data);
  const plural = people.length > 1 ? 's': '';

  return (

    <main>
      <section className="container">
        <h3>{`${people.length} birthday${plural} today`}</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>

  )
}

export default App;
