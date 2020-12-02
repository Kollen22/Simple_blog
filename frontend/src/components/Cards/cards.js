import React, { useEffect, useState } from 'react';
import { Container, DivWraper, Card, P, H1, H4 } from './cardsElements';


export const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch(`http://localhost:3333/view`)
    .then(res => {
      res.json().then(news =>{
        setData(news);
      })
    })
  })


  return (
    <Container>
      <DivWraper>
      { data.map(person => 
            <Card key={person._id}>
                <H1>{person.title}</H1>
                <P>{person.news}</P>
                <H4>Autor: {person.author}</H4>
            </Card>
      )}
        </DivWraper>
</Container>
  )
}

export default Cards;

