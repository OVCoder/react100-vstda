import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      description: '',
      priority: 0
    }
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleSave(index){
    this.props.handleEdit(index, this.state.description, this.state.priority);
    this.toggleEditing();
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value},);
    console.log({[event.target.name]: event.target.value});
  }
  todoColor(priority) {
    if (priority == 1) {
      return {
        background: "#fc9f74",
        color: "white"
      };
      console.log("yellow");
    };
    if (priority == 2) {
      return {
        background: "#ef7339",
        color: "white"
      };
      console.log("orange");
    }
    if (priority == 3) {
      return {
        background: "#e24e09",
        color: "white"
      };
      console.log("red");
    }
  }

  render() {
    const { todo, handleDelete, index } = this.props
   
    return (
      <li className='success' >
        {this.state.isEditing ? (
          <div>
            <label display="block">I want to</label>
            <textarea display="block" rows="3" onChange={this.handleChange} name="description" defaultValue={todo.description}></textarea>
            <label className="labelPadding" htmlFor="exampleFormControlTextarea1">How much of a priority is this?</label>
              <div>
                <select
                  type="number"
                  className="form-control create-todo-priority"
                  aria-describedby="passwordHelpInline"
                  name="priority"
                  onChange={this.handleChange}
                  defaultValue={todo.priority}
                  id="priorityUpdated">
                  <option selected >{todo.priority}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            <button display="inline-block" className="edit-todo" onClick={() => this.handleSave(index)}>Save</button>
            <button display="inline-block" className="delete-todo" onClick={this.toggleEditing}>Cancel</button>
          </div>
        ) : (
          <div>
            <div display="inline-block" className="floating-box" style={this.todoColor(todo.priority)}>{todo.description}</div>
            <button display="inline-block" className="edit-todo" onClick={this.toggleEditing}>Edit</button>
            <button display="inline-block" className="delete-todo" onClick={() => handleDelete(index)}>Delete</button>
          </div>
          )
        }
      </li>
    );
  }
}

export default TodoItem;