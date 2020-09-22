import React from 'react';
import { v4 as uuid } from 'uuid';
import FooterMain from './components/FooterMain';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      todos: localStorage.todos
        ? JSON.parse(localStorage.getItem('todos'))
        : [],

      counter: 0,
      activeTab: 'all',
    };
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleClick = () => {
    // this.setState(
    //   {
    //     todos: [...this.state.todos, this.state.inputText],
    //     inputText: '',
    //   },
    //   () => localStorage.setItem('todos', JSON.stringify(this.state.todos))
    // );

    console.log(uuid());
  };

  updateState = () => {
    this.setState({ todos: [...this.state.todos, 'Testing'] });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Enter your name!'
          onChange={this.handleChange}
          value={this.state.inputText}
        />

        <button onClick={this.handleClick}>Add Todo</button>

        <ul>
          {this.state.todos
            ? this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)
            : ''}
        </ul>

        <FooterMain todos={this.state.todos} update={this.updateState} />
      </div>
    );
  }
}

export default Counter;
