import './Cita.css'

const Cita = ({ cita }) => {
  return (
    <div className="cita">
      <p>Paciente:{cita.paciente}</p>
      <p>Propietario:{cita.propietario}</p>
      <p>Fecha:{cita.fecha}</p>
    </div>
  )
}

export default Cita