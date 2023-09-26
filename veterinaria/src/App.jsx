import { useState, useEffect} from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"

// Generamos la función
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState ([])
  const [paciente, setPaciente] = useState ({})
  
  return(
    <div className="container mx-auto mt-16">
      <Header />

        <div className="mt-12 md:flex">
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        />
        <ListadoPacientes
        pacientes = {pacientes} 
        // pasamos la función al componente
        setPaciente = {setPaciente}
        />
        </div>

    </div>
  )
}

export default App