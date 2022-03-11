import './App.scss';
import Button from "./components/Button"

function hello() {
  alert("hello")
}

const App = () => {
  return (
    <div className="App">
      <Button value="Click" onClick={i => hello()} class={"btn"}/>
    </div>
  );
}

export default App;
