import React from 'react'
import Captain from './Captain'

const Testimony = () => {
  return (
    <div>
        <h1>Jack Sparrow</h1>
        <Captain 
            nombre='Johnny Depp'
            pais='USA'
            imagen='jack-sparrow'
            cargo='actor'
            empresa='Hollywood'
            testimonio= 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'
        />
    </div>
  )
}

export default Testimony