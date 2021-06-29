import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Appoinment from './components/Appoinment';
import Gallary from './components/Gallary';
import Doctor from './components/Doctor';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Appoinment />
      <Gallary />
      <Doctor />
      <Contact/>
    </div>

  );
}

export default App;
