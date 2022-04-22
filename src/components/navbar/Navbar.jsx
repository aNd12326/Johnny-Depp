import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <Link to='/'>
                    <h1>Johnny Depp</h1>
                </Link>
            </Logo>
            <NavMenu>
                {/* <a href='/'> */}
                {/* <Link to="/"> */}
                {/* Home */}
                {/* </Link> */}
                {/* </a> */}
                {/* <a href='/about'> */}
                {/* <Link to='/about'> */}
                {/* About */}
                {/* </Link> */}
                {/* </a> */}
                {/* <a href='/movies:id'> */}
                {/* <Link to='/movies:id'> */}
                {/* Movies */}
                {/* </Link> */}
                {/* </a> */}
                {/* <a href='/contact'> */}
                {/* <Link to='/contact'> */}
                {/* Contact */}
                {/* </Link> */}
                {/* </a> */}

                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/movies:id'>
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>

            </NavMenu>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
`;

const Logo = styled.h1`
    /* font-size: 10px; */
    color: #ffffff;
    cursor: pointer;
`;

const NavMenu = styled.div`
    list-style: none;
    
    li{
        display: inline-block;
        padding: 0px 20px;
        
        a{
            transition: all 0.3s ease 0s;

            &:hover{
                color: #0088a9;
            }
        }

    }
`

export default Navbar