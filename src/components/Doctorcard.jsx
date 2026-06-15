import React from 'react'

function Doctorcard({name,specialisation,gender}) {
  return (
    <div className="card">
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" width="100"/>
        </div>
        <h2>{name}</h2>
        <p>{specialisation} specialist</p>
        <p>{gender}</p>
        <button>view specialist</button>
    </div>
    
  )
}

export default Doctorcard