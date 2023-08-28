

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
 import { QuizzScreen } from './screens/QuizzScreen';
  import { DetailsScreen } from './screens/DetailsScreen';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/quizz" element={<QuizzScreen />}   /> 

         <Route path="/details" element={<DetailsScreen />} /> 
        </Routes>
   
    </BrowserRouter>
    {/* <Router>
        <Routes>
                <Route path="/quizz" element={<QuizzScreen pergunta='Quem descobriu o brasil?' progresso={65} Tema='Historia' />} />      

        </Routes>
    </Router> */}
   </>
  );
}

export default App;
