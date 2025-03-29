import logo from './logo.svg';
import './App.css';
// import Test from './components/Test'
// import ElementRenderer from './components/ElementRenderer';
import ParentComponent from './components/ParentComponent';

function App(){
  return (
    <div>
        <h1>App Component:</h1>
        <ParentComponent />
    </div>
  );
}

export default App;