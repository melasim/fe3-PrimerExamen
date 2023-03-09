import React from 'react'
import '../Card.css'
const Card = ({duenio, mascota}) => {
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()
    const fecharegistro = dia + '/' + mes
    
    return (
        <div className='Card'>
            <h3>Bienvenido {duenio} !</h3>
            <h3>Hemos registrado a {mascota} en nuestro sistema.</h3>
            <h4>Fecha de registro: {fecharegistro}</h4>
        </div>
    )
}

export default Card