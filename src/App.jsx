import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      priority: 0,
      description: '',
      greetingOne: "Welcome to Very Simple Todo App!",
      greetingTwo: "Get started now by adding a new todo on the left."
    };

    this.createNewTodoItem = this.createNewTodoItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value},);
    console.log({[event.target.name]: event.target.value});
  }

  createNewTodoItem() {
    if (this.state.priority > 0) {
      let newTodo = {
        description: this.state.description,
        priority: this.state.priority
      }
      let todos = [...this.state.todos]
      todos.push(newTodo)
      this.setState({ todos, priority: 0, description: '' })
    } else {
      alert("Please select a priority for your todo");
    }
  }

  handleDelete(index) {
    console.log('Delete me I am index ', index);
    this.setState(this.state.todos.splice(index,1));
  }

  handleEdit(index, description, priority){
    let todos = [...this.state.todos];

    let newTodo = {
      description,
      priority
    };

    todos[index] = newTodo
    this.setState({ todos });
  }

  render() {
    return (
      <div className='container text-color-white'>
        {/* Section with the title of the application */}
        <h1 className="p-3 mb-2 white">Very Simple Todo App</h1>
        <p className="white">Track all of the things</p>
        <hr className="table-light" />

        <div className='zero-padding'>
          {/* Section for adding new ToDo on the left */}
          <div className="col-md-4 d-inline-block table-light zero-padding right-padding">
            <div className="form-group bg-light text-dark grey-area">
              <label
                className="padding"
                htmlFor="exampleFormControlTextarea1"
                name="box">Add new ToDo</label>
            </div>
            <div className="form-group grey-box padding">
              <label htmlFor="exampleFormControlTextarea1">I want to</label>
              <textarea
                className="form-control create-todo-text"
                id="todo-text"
                name="description"
                onChange={this.handleChange}
                defaultValue={this.state.description}
                rows="3">
              </textarea>

              <label className="labelPadding" htmlFor="exampleFormControlTextarea1">How much of a priority is this?</label>
              <div>
                <select
                  className="form-control create-todo-priority"
                  aria-describedby="passwordHelpInline"
                  name="priority"
                  onChange={this.handleChange}
                  defaultValue={this.state.priority}
                  id="priority">
                  <option value="0">Select priority</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <div className="bg-secondary p-2 w-100 d-block padding grey-area">
              <button
                type="button"
                className="btn btn-lg btn-block align-middle p-0 green-button create-todo"
                id="add-button"
                onClick={this.createNewTodoItem}>Add
                </button>
            </div>
          </div>

          {/* Todo list on the right */}

          <div className="col-md-8 d-inline-block align-top table-light selector-for-some-widget zero-padding" id="todo-list">
            <div className="form-group bg-light text-dark  grey-area left-padding">View Todos
            </div>
            <TodoList
              todos={this.state.todos}
              key={this.state.key}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleChange={this.handleChange}
              greetingOne={this.state.greetingOne}
              greetingTwo={this.state.greetingTwo}

            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;