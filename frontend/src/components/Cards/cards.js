import React from 'react';
import axios from 'axios';
import { Container, DivWraper, Card, P, H1, H4 } from './cardsElements';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/view`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <Container>
          <DivWraper>
        { this.state.persons.map(person => 
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
}
