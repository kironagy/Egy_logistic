import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
// Pages and components
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Services from './pages/Services/services';
import Resources from './pages/Resources/resources';
import Contact from './pages/contact/Contact';
import { useEffect, useState } from 'react';
function App() {
  const [button , setButton] = useState(false);
  const [Navbar_Style , setNavbar] = useState(false)

  useEffect(()=>{
   window.addEventListener("scroll" , ()=>{
    if(window.scrollY >= 650){
      setButton(true)
    }else{
      setButton(false)
    }
      if(window.scrollY > 200){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
   })
  })
  function ScrollTop(){
    window.scrollTo(0 , 0)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar style={Navbar_Style}/>
      {button ? <div className='button_scroll' onClick={ScrollTop}><button><img src='../img/slide-up.png'></img></button></div> : ""}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/resources' element={<Resources/>}></Route>
          <Route path='/contact-us' element={<Contact/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;