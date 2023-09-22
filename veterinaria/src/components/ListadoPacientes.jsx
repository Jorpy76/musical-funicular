import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes, setPaciente }) => {
  //  console.log(pacientes.lenght === 0)
  // tomamos la función en el componente ( setPaciente|)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="font-semibold text-lg mt-6 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Pacientes
			 	key={paciente.Id}
			  	paciente={paciente} 
				setPaciente = {setPaciente}	
				/>
          ))}
        </>
      ) : (
            <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="font-semibold text-lg mt-6 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
            
            
            
            
            
            </>

      ) }
    
    
    
    </div>
  );
};

export default ListadoPacientes;