import React from 'react'
import styled from 'styled-components'

const Captain = (props) => {
    return (
        <Container>
            <Imagen
                src={require(`../../images/${props.imagen}.jpg`)}
                alt='captain'
            />
            <ContenedorTxtTestimonio className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> de <strong>{props.pais}</strong>
                </p>
                <p className='cargo-testimonio'>
                    {props.cargo} de <strong>{props.empresa}</strong>
                </p>
                <p className='texto-testimonio'>
                    "{props.testimonio}"
                </p>
            </ContenedorTxtTestimonio>
        </Container>
    )
}

const Container = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: center;
    width: 800px;
    margin: 0 auto;
    padding-top: 60px;

    contenedorTxtTestimonio{
        padding: 20px;
    } */

    width: 1170px;
    height: 368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 3px 13px 1px rgb(0 0 0 / 9%);
    margin-top: 60px;

    .nombre-testimonio {
        font-size: 1.3rem;
    }
    
    .cargo-testimonio {
        font-size: 1.3rem;
        margin-top: 15px;
        padding-bottom: 30px;
    }

    .texto-testimonio {
        font-size: 1.1rem;
        text-align: justify;
    }   
`

const Imagen = styled.img`
  max-width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%
`

const ContenedorTxtTestimonio = styled.div`
        text-align: center;
        padding: 40px;
        font-family: Lato, sans-serif;
        font-weight: 400;
        line-height: 1.5rem;
`

export default Captain