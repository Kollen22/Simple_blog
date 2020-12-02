import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const DivWraper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 5%;
`;

export const Card = styled.div`
    width: 400px;
    height: 500px;
    background: rgba(106, 80, 145);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 10px 1%;
    border: 10px solid rgba(212, 187, 250);
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        -webkit-transform: scale(1.04);
        transform: scale(1.04);
    }
`;

export const H1 = styled.h1`
    text-align: center;
    padding: 10px 0px;
    color: #fff;
`;

export const P = styled.p`
    text-align: center;
    padding: 40px 0px;
    color: #fff;
`;

export const H4 = styled.h4`
    color: #fff;
`;