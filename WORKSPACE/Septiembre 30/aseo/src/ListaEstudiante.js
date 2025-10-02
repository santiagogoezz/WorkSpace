import './ListaEstudiante.css';
import Estudiante from './Estudiante';
function ListaEstudiante({lista}) {
    return (
        <div className='lista'>
          <h1>Lista de estudiantes</h1>
      {lista.map(est => (
        <Estudiante nombre={est.nombre} apellido={est.apellido} />
      ))}
        </div>
    );
}
export default ListaEstudiante;