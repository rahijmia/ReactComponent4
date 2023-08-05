import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>
        <Person name="Rubel Nayok" food="Fuska" nayika="Moushumi" ></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="BappaRaz" nayika="Cheka"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px'
  }
console.log(props)
  return ( 
  <div style={personStyle}>
  <h1>Nayok:{props.name}</h1>
  <h3>Nayika: {props.nayika}</h3>
  </div>
  )
  
  }
export default App;
