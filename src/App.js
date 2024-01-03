import Nav from './Components/Nav'
import Login from './Components/Login'
import Home from './Components/Home'
import {Route,Routes} from 'react-router-dom'
import Register from './Components/Register'

import LoginAfter from './Components/LoginAfter'
import Bookpage from './Components/Bookpage'
// import Sample from './Components/Sample'



function App() {
  return (
    <div>
    
   
   
  
   
 
    <Routes><Route path="/Register" element={<Register/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/Home" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
   <Route path="/LoginAfter" element={<LoginAfter/>}/>
    <Route path="/Bookpage" element={<Bookpage/>}/></Routes>
    <Nav/>
 

    



    

  
    </div>
  
  );
}

export default App;
