import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [user, setUser] = useState({
    duenio: "",
    mascota:""
  })

  const [validacion, setValidacion] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(user.duenio.length > 2 && user.mascota.length >5){
        setValidacion(true)
        setError(false)
    } else {
      setValidacion(false)
      setError(true)
    }
  
  }

  const handleNombreDuenio = (event) => {
    const nombreDuenio = event.target.value;
    const nombreSeteado = nombreDuenio.trim();
    setUser({...user, duenio : nombreSeteado}); 
  }

  return (
    <div className="App">
      <h1>Ingresá tu Mascota!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tu nombre o apodo:</label>
          <input type="text" value={user.duenio} onChange={handleNombreDuenio}/>
        </div>
        <div>
          <label>Nombre de tu mascota:</label>
          <input type="text" value={user.mascota} onChange={(e) => setUser({...user, mascota: e.target.value})} />
        </div>
        <button type='submit'>Enviar</button>
      </form>

      {error && "Por favor chequea que la información sea correcta"}
      {validacion && <Card duenio={user.duenio} mascota={user.mascota}/>}
    </div>
  )
}

export default App
