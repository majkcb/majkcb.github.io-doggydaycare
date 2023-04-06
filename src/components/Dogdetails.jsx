const Dogdetails = (props) => {
    const { dog, goBack } = props;
  
    if (!dog) {
      return null;
    }
  
    return (
      <section className="dogdetails">
        <h1>{dog.name}</h1>
        <div className="dog-details">
          <img src={dog.img} alt={dog.name} className="dog-image" />
          <p>{dog.description}</p>
          <p>Ålder: {dog.age}</p>
          <p>Ras: {dog.breed}</p>
          <p>Kön: {dog.sex}</p>
          <p>Närvarande: {dog.present ? 'Ja' : 'Nej'}</p>
          <p>Chipnummer: {dog.chipNumber}</p>
          {dog.owner && (
            <div>
              <p>Ägare: {dog.owner.name} {dog.owner.lastName}</p>
              <p>Telefonnummer: {dog.owner.phoneNumber}</p>
            </div>
          )}
          <button onClick={goBack}>Tillbaka</button>
        </div>
      </section>
    );
  };
  
  export default Dogdetails;