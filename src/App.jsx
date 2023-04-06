import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Dogdetails from './components/Dogdetails';

function App() {
  const HOME = 'home', CATALOG = 'catalog', DOGDETAILS = 'dogdetails';
  const [currentScreen, setCurrentScreen] = useState(HOME);
  const [selectedDog, setSelectedDog] = useState(null);

  const showDogDetails = (dog) => {
    setSelectedDog(dog);
    setCurrentScreen(DOGDETAILS);
  };

  const restart = () => {
    setSelectedDog(null);
    setCurrentScreen(CATALOG);
  };

  const resetToStart = () => {
    setCurrentScreen(HOME)
  }

  let content = null;

  switch(currentScreen) {
    case HOME :
      content = <Home catalogScreen={() => setCurrentScreen(CATALOG)} />;
      break;
    case CATALOG :
      content = <Catalog dogsSelected={(dog) => showDogDetails(dog)} goToHome={resetToStart} />;
      break;
    case DOGDETAILS :
      content = <Dogdetails dog={selectedDog} goBack={restart} />;
      break;
    default:
      content = null;
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
