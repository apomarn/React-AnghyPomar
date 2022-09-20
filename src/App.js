import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting="Hola a Todos!"/>
    </div>
  );
}

export default App;
