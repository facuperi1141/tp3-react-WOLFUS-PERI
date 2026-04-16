import './Listado.css'
import Cita from './Cita'

const Listado = ({ citas }) => {
  return (
    <div className="listado">
      <h2>Listado</h2>
      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  )
}

export default Listado