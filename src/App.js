
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App(){
  return (
    <Router>
    
   <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
        
       <Route path='about'  element={<About/>}/>
       
       <Route path='contact'  element={<Contact/>}/>

       <Route path='services' element={<Services/>}/>
           
     </Routes>
   </div>

   </Router>  
    
  );
}



export default App;
