import React from 'react';
import axios from 'axios';
import { Container, Form, Label, H3, Button, Input } from './apiPostElements';

export default class PersonList extends React.Component {
  state = {
    title: '',
    news: '',
    author: '',
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

  handleChangeY = event => {
    this.setState({ news: event.target.value });
  }

  handleChangeX = event => {
    this.setState({ author: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      title: this.state.title,
      news: this.state.news,
      author: this.state.author,
    };


    axios.post(`http://localhost:3333/create`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            <H3>Person name</H3>
            <Input type="text" name="name" onChange={this.handleChange} />
          </Label>
          <Label>
            <H3>Person year</H3>
            <Input type="text" name="name" onChange={this.handleChangeY} />
          </Label>
          <Button type="submit">Add</Button>
        </Form>
      </Container>
    )
  }
}