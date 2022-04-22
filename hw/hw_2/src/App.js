import './App.css';
import Drinks from './components/Drinks'
import Form from './components/Form'
import { GlobalContext } from './context/DrinkContext'

function App() {
  const { dispatch } = GlobalContext()

  return (
    <div className="App">
      <Form onClick={dispatch}/>
      <Drinks />
    </div>
  );
}

export default App;
