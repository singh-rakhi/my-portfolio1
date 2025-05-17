// import logo from './logo.svg';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import './index.css';
import './components/HelpSection';
import './components/InfoSection';
import Terminal from './components/Terminal';


function App() {
  return (
    <div className="App">
      <div className=" font-source min-h-screen flex flex-col">
      <Nav />
      <Terminal/>
      <Footer />
      
    </div>
    </div>
  );
}


export default App;
