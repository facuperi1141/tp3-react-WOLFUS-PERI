import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

const citas = [
  { paciente: 'Firulais', propietario: 'Martin', fecha: '2024-01-10' },
  { paciente: 'Michi',    propietario: 'Zoe',    fecha: '2024-01-11' },
  { paciente: 'Rex',      propietario: 'Diego',  fecha: '2024-01-12' },
]

const App = () => {
  return (
    <div className="app">
      <Formulario />
      <Listado citas={citas} />
    </div>
  )
}

export default App