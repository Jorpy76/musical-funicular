import { useState, useEffect} from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"

// Generamos la función
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState ([])
  const [paciente, setPaciente] = useState ({})

// El orden en que se declaren los effects es el orden en que se ejecutan....
  useEffect(() => {
    const obetenerLs = ()=> {
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLs)
    }
    obetenerLs()
  }, [])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  
  return(
    <div className="container mx-auto mt-16">
      <Header />

        <div className="mt-12 md:flex">
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
        />
        <ListadoPacientes
        pacientes = {pacientes} 
        // pasamos la función al componente
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />
        </div>

    </div>
  )
}

export default App