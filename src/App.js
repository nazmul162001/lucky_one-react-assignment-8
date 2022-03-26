import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Teams from './components/Teams/Teams';
import Faq from './components/FAQ/Faq';

function App() {
  return (
    <div className="App">
      <Header />
      <Teams />
      <Faq />
    </div>
  );
}

export default App;
