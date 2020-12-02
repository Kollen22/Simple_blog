import React, { useRef, useEffect, useCallback, useState } from 'react'
import { Background, ModalWraper, Div } from './modalElements';
import { animated, useSpring } from 'react-spring';
import api from '../../services/api';


export const Modal = ({ showModal, setModal }) => {

    const [title, setTitle] = useState([]);
    const [news, setNews] = useState([]);
    const [author, setAuthor] = useState([]);
    const modalRef = useRef();


    async function handleSubmit(event){
        event.preventDefault();

        const user = {
          title: title,
          news: news,
          author: author,
        };
    
    
        api.post(`create`, user )
          .then(res => {
            console.log('Ok')
          })

          alert('Noticia criada com sucesso!');
    }

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    })

    const closeModal = e =>{
        console.log(modalRef.current);
        if(modalRef.current === e.target){
            setModal(false);
            
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === "Escape" && showModal){
            setModal(false);
        }
    }, [setModal, showModal])

    useEffect(() =>{
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);


    return (
        <>
        {showModal ? (
            <Background>
            <animated.div style={animation}>
                <ModalWraper>
                     <span onClick={() => setModal(prev => !prev)}>X</span>
                    <form onSubmit={handleSubmit}>
                    <Div>
                        <h2>Titulo da Notícia</h2>
                        <input type="text" placeholder="titulo" onChange={e => setTitle(e.target.value)} />
                    </Div>

                    <Div>
                        <h2>Conteudo</h2>
                        <textarea type="text" placeholder="Conteudo" onChange={e => setNews(e.target.value)} />
                    </Div>

                    <Div>
                        <h2>Autor</h2>
                        <input type="text" placeholder="Autor" onChange={e => setAuthor(e.target.value)} />
                    </Div>

                    <Div>
                        <button type="submit">Enviar</button>
                    </Div>
                    </form>
                </ModalWraper>
            </animated.div>
        </Background>
        )
        :
        null}
        </>    
    )
}

export default Modal;
