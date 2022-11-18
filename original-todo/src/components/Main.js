import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// Main component shows the heading TODO and the list of TODOs.
class Main extends React.Component {
  constructor(props) {
    super(props);
    // check if there is TODOs list in local storage. if not, create an empty array
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.state = {
      todos,
      newTodo: "",
    };
  }

  // Add a new TODO to the list.
  addTodo = () => {
    const newTodo = this.state.newTodo; // get the newTodo string from the state
    if (newTodo) {
      // if the newTodo string is not empty
      this.setState({
        todos: [...this.state.todos, newTodo], // add the newTodo string to the todos array
        newTodo: "", // reset the newTodo string to empty
      });
      // save the TODOs to localStorage
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  };

  // Remove a TODO from the list.
  removeTodo = (index) => {
    // index is the index of the TODO to be removed
    const todos = this.state.todos; // get the todos array from the state
    todos.splice(index, 1); // remove the TODO at the given index
    this.setState({ todos }); // update the todos array in the state
    // save the TODOs to localStorage
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  // Update the new TODO text.
  updateNewTodo = (e) => {
    this.setState({ newTodo: e.target.value }); // e is the event object that is passed to the function. target.value is the value of the input field.
  };

  render() {
    return (
      <Container fluid className="bg-secondary text-light text-center pt-2">
        <Row>
          <Col>
            <input
              type="text"
              value={this.state.newTodo}
              onChange={this.updateNewTodo}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  this.addTodo();
                }
              }}
              placeholder="New TODO"
            />
            <Button className="mx-3" variant="danger" onClick={this.addTodo}>
              Add Task
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="m-3 text-start">
            <h2>TODO</h2>
            {/* Create an Unordered List to display the todos */}
            <ul>
              {this.state.todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                  <Button
                    variant="danger"
                    className="delete btn-sm ms-1 py-0 px-1"
                    onClick={() => this.removeTodo(index)}
                  >
                    x
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
