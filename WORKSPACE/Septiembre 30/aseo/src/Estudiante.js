import './Estudiante.css';

function Estudiante({nombre, apellido}) {
    return (
        <div className="Estudiante">
            <span className='nombre'>{nombre}</span>
            <span className='apellido'>{apellido}</span>
        </div>
    );
}
export default Estudiante;