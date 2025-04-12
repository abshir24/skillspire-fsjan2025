import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
// import ElementRenderer from './components/ElementRenderer';
// import ParentComponent from './components/ParentComponent';
// import ButtonClick from './components/ButtonClick';
import Students from './components/Students';
import Student from './components/Student';
// import ListRenderer from './components/ListRenderer';
//import A11 from "./components/A11"

// import Food from './components/Food';
// import Vacation from './components/Vacation';


function App(){
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Students />} />
            <Route path='/item/:id' element={ <Student />}/>
        </Routes>
    </Router> 
  );
}

export default App;