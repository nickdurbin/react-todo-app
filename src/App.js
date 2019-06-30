import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Wireframe project',
        completed: false
      },
      {
      id: 2,
      title: 'Build application',
      completed: false
      },
      {
      id: 3,
      title: 'Make UI/UX clean',
      completed: false
      }
    ]
  }

  // Toggle Complete the ToDo 
  markComplete = (id) => { 
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // Delte Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;