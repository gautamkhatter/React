import React, { Component } from 'react'
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  update(id, updatedTask) {
    const updateTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    })
    this.setState({ todos: updateTodos });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        removeTodo={this.remove}
        updateTodo={this.update}
      />;
    });

    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <NewTodoForm
          createTodo = {this.create}
        />
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default TodoList;

