import React, { useState } from 'react'
import { Container, SideBar, Logo, NavLink,NavUl, NavInput } from './sidebarElements';
import {Modal} from '../Modal/modal';

export const Sidebar = () => {
    const [showModal, setModal] = useState(false);

    const openModal = () =>{
        setModal(prev => !prev);
    }

    return (
        <Container>
            <SideBar>
                <Logo>Logo</Logo>
                <NavUl>
                    <NavLink to="#" >Home</NavLink>
                    <NavLink to="#" onClick={openModal}>Criar</NavLink>
                    <NavLink to="#">Noticias</NavLink>
                </NavUl>
                <NavInput />
            </SideBar>
            <Modal showModal={showModal} setModal={setModal}/>
        </Container>
    )
}

export default Sidebar;
