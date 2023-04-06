import { useState, useEffect } from 'react';

const Catalog = (props) => {
    const [dogs, setDogs] = useState([]);
  
    useEffect(() => {
      fetch('https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126')
        .then(response => response.json())
        .then(data => setDogs(data.record))
        .catch(error => console.error(error))
    }, []);

    console.log(dogs);
  
    return (
      <section className="catalog">
        <h2>Möt våra lurviga gäster!</h2>
        <button className="go-to-home" onClick={props.goToHome}>Till startsidan</button>
        <ul className="dog-list">
          {dogs.map(dog => (
            <li key={dog.id} className="dog-card" onClick={() => props.dogsSelected(dog)}>
              <img src={dog.img} alt={dog.name} className="dog-image" />
              <h3 className="dog-name">{dog.name}</h3>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Catalog;