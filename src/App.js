import './App.css';
import SinglePage from './components/pdf/SinglePage';

import samplePdf from './Daniel Gonzalez ITIC  (CV) INGLES.pdf';

function App() {
  return (
    <div className="App">
     <SinglePage pdf={samplePdf}>

     </SinglePage>
    </div>
  );
}

export default App;
