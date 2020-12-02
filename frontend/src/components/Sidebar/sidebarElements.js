import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
`;

export const SideBar = styled.div`
    width: 100%;
    height: 80px;
    background: rgba(61, 31, 105);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10%;
`;

export const Logo = styled.h1`
    font-size: 2rem;
    text-align: center;
    
`;

export const NavUl = styled.ul`

    list-style: none;
`;

export const NavLink = styled(Link)`
    font-size: 1.2rem;
    padding: 0px 20px;
    text-decoration: none;
    color: black;

    &:hover{
        color: #fff;
    }
`;

export const NavInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: none;
`;