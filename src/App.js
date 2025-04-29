// import logo from './logo.svg';
import Nav from './components/Nav';
import Body from './components/Body';

import Footer from './components/Footer';
import './App.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <div className=" font-source min-h-screen flex flex-col">
      <Nav />
      <Body />
      <Footer />
      
    </div>
    </div>
  );
}


export default App;
