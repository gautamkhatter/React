import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idEditing: false,
      task: this.props.task
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate }>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="Todo">
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div> 
      )
    }
    return result;
  }
}


export default Todo;

