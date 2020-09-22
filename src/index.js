import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import './style.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     // console.log('constructor-first');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount-first');
//   }

//   componentWillUnmount() {
//     // console.log('componentWillUnmount-first');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log('componentDidUpdate-first');
//   }

//   render() {
//     // console.log('First');
//     return <h1>First</h1>;
//   }
// }

// class Second extends React.Component {
//   constructor() {
//     super();
//     // console.log('constructor-second');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount-second');
//   }

//   componentWillUnmount() {
//     // console.log('componentWillUnmount-second');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log('componentDidUpdate-second');
//   }
//   render() {
//     // console.log('Second');
//     return <h1>Second</h1>;
//   }
// }
function Display(props) {
  return (
    <div>
      <img width='100' src={props.avatar_url} alt={props.login} />
      <ul>
        <li>{props.location}</li>
        <li>{props.name}</li>
        <li>{props.organizations_url}</li>
      </ul>
    </div>
  );
}

class SuperApp extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      data: null,
    };
    this.usernames = [
      'akshatspeaking',
      'raghurambachu',
      'ashikraj78',
      'abhigoswami12',
    ];
    console.log('constructor-super');
  }
  fetchData = () => {
    console.log(this.state.activeIndex);
    let url = `https://api.github.com/users/${
      this.usernames[this.state.activeIndex]
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((userDetails) => {
        this.setState({ data: userDetails });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.activeIndex !== this.state.activeIndex) {
      this.fetchData();
    }
  }

  handleClick = (index) => {
    this.setState({ activeIndex: index });
  };
  render() {
    if (!this.state.data) {
      return <Spinner />;
    }
    return (
      <div>
        <ul>
          {this.usernames.map((u, index) => (
            <li>
              <button
                className={index === this.state.activeIndex ? 'active' : ''}
                onClick={() => this.handleClick(index)}
              >
                {u}
              </button>
            </li>
          ))}
        </ul>
        <small>Username: {this.state.username}</small>
        <Display {...this.state.data} />
      </div>
    );
  }
}

ReactDOM.render(<SuperApp />, document.getElementById('root'));
