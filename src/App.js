import logo from './logo.svg';
import './App.css';

function ToDo(props){
  return(
    <div>
      <h2>{props.t}</h2>
    </div>
  )
}

function GenList(props){
  return(
    <div>
      {props.l.map((task) => <ToDo t={task}/>)}
    </div>
  )
}

function App()  {
  const tasks = ["1", "2"]
  return(
    <div class="container" style={{maxWidth:400, border: 5, borderColor: "red", borderStyle: "solid"}}>
        <GenList l={tasks}/>
    </div>
  );
}

export default App;
