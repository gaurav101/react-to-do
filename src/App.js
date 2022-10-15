import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ToDos from './Components/ToDos/ToDos';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
function App() {
  const menu = [
    { sr: 1, text: "Home", link: "/" }, { sr: 2, text: "About", link: "/about" }
  ];
  return (
    <>
     <Header title="To Do's" isSearchEnable={false} menu={menu} />
       
  
    <Routes>
     
      
          <Route path="" element={<ToDos />} />
          <Route path="about" element={<About />} />
         
   
    </Routes>

  <Footer />
            
         
      
      
    </>
  );
}

export default App;
