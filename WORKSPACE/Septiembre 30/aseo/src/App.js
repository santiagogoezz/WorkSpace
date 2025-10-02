import logo from './logo.svg';
import './App.css';
import Estudiante from './Estudiante';
import ListaEstudiante from './ListaEstudiante';
import Footer from './Footer';

function App() {
  let lista = [{nombre: "Fulanito", apellido: "De tal"},
                {nombre: "Peranito", apellido: "Perez"},
                {nombre: "Sutanito", apellido: "Lopez"},
                {nombre: "Menganito", apellido: "Gomez"}
  ]
  return (
    <div className="App">
      <ListaEstudiante lista={lista}/>
      <Footer/>
    </div>
  );
}

export default App;
