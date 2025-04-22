// import React, { useState } from 'react';
// import './App.css';
// import Sidee from './components/sidee';
// import Todo from './pages/todo';
// import Pomo from './pages/pomo';
// import './assets/fonts/font.css';
// import Preloader from './components/Preloader';

// function App() {
//   const [showPreloader, setShowPreloader] = useState(true);

//   return (
//     <>
//       {showPreloader ? (
//         <Preloader onFinish={() => setShowPreloader(false)} />
//       ) : (
//         <>
//           <Sidee />
//           <Pomo />
//           <Todo />
//         </>
//       )}
//     </>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Sidee from './components/sidee';
// import Todo from './pages/todo';
// import Pomo from './pages/pomo';
// import './assets/fonts/font.css';
// import Preloader from './components/Preloader';

// function App() {
//   const [showPreloader, setShowPreloader] = useState(true);

//   return (
//     <>
//       {showPreloader ? (
//         <Preloader onFinish={() => setShowPreloader(false)} />
//       ) : (
//         <Router>
//           <div className="flex">
//             {/* Sidebar - always visible */}
//             <Sidee />

//             {/* Main Content Area */}
//             <div className="ml-60 w-full min-h-screen bg-[#fdfcf4] p-6">
//               <Routes>
//                 <Route path="/" element={<Pomo />} />
//                 <Route path="/todo.jsx" element={<Todo />} />
//               </Routes>
//             </div>
//           </div>
//         </Router>
//       )}
//     </>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <div className="app-container" style={{ display: 'flex' }}>
          <Sidee />
          <div style={{ marginLeft: '240px', width: '100%', padding: '20px' }}>
            <Routes>
              <Route path="/todo" element={<Todo/>} />
              <Route path="/pomo" element={<Pomo />} />
              {/* Add other routes as needed */}
              <Route path="*" element={<p>Page Not Found</p>} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

