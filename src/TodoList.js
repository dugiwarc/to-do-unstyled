import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  create = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        {this.state.todos.map(item => (
          <Todo
            task={item.task}
            key={item.id}
            completed={item.completed}
            id={item.id}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
          />
        ))}
      </div>
    );
  }
}
