import About from "./components/About";
import Home from "./components/Home";
import Navbar from './components/NavBar';
import Skills from "./components/Skills";
import Photos from "./components/Photos";

function App() {
  return (
    <div >
     <Navbar />
     <Home />
     <About />
     <Skills/>
     <Photos />
    </div>
  );
}

export default App;
