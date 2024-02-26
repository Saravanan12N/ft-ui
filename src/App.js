import logo from './logo.svg';
import './App.css';
import {IndecisionApp} from "./Template1";
import { Counter } from './Counter';
import Modal from './OptionModel';
import './styles/styles.scss'


const count = 0;
const TemplateTwo = (
  <div>

    <h1>Count: {count}</h1>
    <button id="my-id" className='button1'>+1</button>
  </div>
)

const User = ({name,age}) => {
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

function App() {
  var user = {
    name: 'Saravanan Nallakamu',
    age: 27
  }

  var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
  };
  const onFormSubmit = (e) =>{
    e.preventDefault();
    console.log('form submitted');
    const option = e.target.elements.option.value;
    if(option){
      app.options.push(option);
      e.target.elements.option.value = '';
    }
  }

  let visibility = false;
  const toggleVis = () => {
    visibility = !visibility;
  };
  
  return (
    <div className="App">
      {/* <h1>{user.name}</h1>

      {user.age >= 18 && <p>Age : {user.age}</p>}

      <h1>Visibility Toggle</h1>
      <button onClick={toggleVis}>{visibility ? 'Hide details' : 'Show details'}</button>

      <br></br>
      <hr></hr>
      <h1>{app.title}</h1>
      {
        app.subtitle && <p>{app.subtitle}</p>
      }
      {
        app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>
      }
      <div>

        <h1>Count: {count}</h1>
        <button id="my-id" className='button1'>+1</button>
      </div>

      <hr/>
      <p>{app.options
      }</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder='Enter name' name='option'/>
        <button onClick={()=>{}}>Add Option</button>
      </form> */}
      <IndecisionApp/> 
      {/* <Counter/>
      <User name ="Saravanan N" age="27"/> */}
      
    </div>
  );

}
export default App;
