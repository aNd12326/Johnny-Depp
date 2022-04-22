import React from 'react'
import styled from 'styled-components'

const Captain = (props) => {
    return (
        <Container>
            <img
                src={require(`../../images/${props.imagen}.jpg`)}
                alt='captain'
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
                </p>
                <p className='cargo-testimonio'>
                    {props.cargo} de <strong>{props.empresa}</strong>
                </p>
                <p className='texto-testimonio'>
                    "{props.testimonio}"
                </p>
            </div>
        </Container>
    )
}

const Container = styled.div`

    width: 700px;
    height: 368px;
    margin: 10px 10px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 3px 13px 1px rgb(0 0 0 / 9%);

    img{
        height: 100%;
        width: auto;
    }

    .contenedor-texto-testimonio{
        text-align: center;
    padding: 40px;
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
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

export default Captain