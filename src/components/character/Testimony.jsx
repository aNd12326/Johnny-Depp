import React from 'react'
import Captain from './Captain'
import styled from 'styled-components'

const Testimony = () => {
  return (
    <div className='container-character'>
        <Captain 
            nombre='Johnny Depp'
            pais='USA'
            imagen='jack-sparrow'
            cargo='actor'
            empresa='Hollywood'
            testimonio= 'John Christopher Depp II es un actor, productor, guionista y músico estadounidense. Ha sido nominado en tres ocasiones al Óscar y recibió un Globo de Oro, un premio del Sindicato de Actores y un César.'
        />
    </div>
  )
}

export default Testimony