import React, { useEffect, useState } from 'react';
import AXIOS from 'axios';
import { Link } from 'react-router-dom';

function People({ BASE_URL }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople([]);
    async function loadPeople() {
      const { data } = await AXIOS.get(`${BASE_URL}/people`);
      setPeople(data.results);
      console.log(people);
      return data;
    }
    loadPeople();
  }, [BASE_URL]);

  

  let peopleList = people.map((person, index) => (
    <article key={`${index}`}>
    <div>
      <h2 >
        {person.name}
      </h2>
    </div>
    </article>
  ))
  

  return (
    <section className='row'>
      {peopleList}
    </section>
  )
}

export default People
