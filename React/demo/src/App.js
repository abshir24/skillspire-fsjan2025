import logo from './logo.svg';
import './App.css';

function HelloWorld(){
  return <h1>Hello World React!</h1>
}

function PersonalDetails(){
  return (
    <div>
      <h1>Name: Abshir</h1>
      <h1>Food: Tikka Masala</h1>
      <h1>Vacation Destination: Tulum</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <HelloWorld />
      <PersonalDetails />
    </div>
  );
}

export default App;
