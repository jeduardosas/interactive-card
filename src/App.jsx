import {useState} from 'react'

import Tarjeta from "./Components/Tarjeta"
import Formulario from "./Components/Formulario"
function App() {
  
  const [data,setData] = useState({
    nombre:'Nombre del Titular',
    numero:'0000 0000 0000 0000',
    mes:'00',
    year:'00'
  })

  return (
   <div className=" principal">
    <Tarjeta data={data} />
    <Formulario data={data} setData={setData} />
   </div>
  )
}

export default App
