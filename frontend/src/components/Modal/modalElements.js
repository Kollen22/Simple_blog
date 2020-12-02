import styled from 'styled-components';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalWraper = styled.div`
    width: 800px;
    box-shadow: 0 5px 16px rgba(0,0,0,.2);
    background: rgba(148, 90, 219);
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 9999;

    border-radius: 10px;

    span{
        font-size: 2rem;
        display: inline;
        color: rgba(55, 38, 82);
        position: absolute;
        right: -10px;
        top: -15px;
        background-color: white;
        border-radius: 20px;
        padding: 10px;
        cursor: pointer;

        &:hover{
            font-size: 2.3rem;
        }
    }
`;

export const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 20px 2%;

    h2{
        text-align: center;
        color: #fff;
    }

    input{
        width: 40%;
        height: 50px;
        text-align: center;
    }

    textarea{
        width: 500px;
        height: 400px;
        resize: none;
    }

    button{
        width: 100px;
        height: 50px;
    }

`;