// what is left:
// i basically stole boiler points from the previous class activities
// i reconfigured the bookpages , SRC  , utils, controllers
// models , routes folder structures 
// and implemented my own functions and have the application rendering
// i cant get the books to display once the user hits submit
// in theory i believe the API.js file is not rendering inside my listitems
// or my booksController is not wired up correctly inside this file
// i tried deploying it just as the clickygame through  create react app to Github pages
// but nothing is displaying
//if you run my code locally you can see what ive created
// this was harder then the clicky-game



import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Delete from "../components/Delete";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class GoogleBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.RetrieveBooks()
      .then(res => this.setState({ BookSchema: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Google-Books</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <Delete />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GoogleBooks;
