import React, { useState } from 'react';
import './App.css';
import Sidee from './components/sidee';
import Todo from './pages/todo';
import Pomo from './pages/pomo';
import './assets/fonts/font.css';
import Preloader from './components/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        <>
          {/* <Sidee /> */}
          <Pomo />
          {/* <Todo /> */}
        </>
      )}
    </>
  );
}

export default App;
