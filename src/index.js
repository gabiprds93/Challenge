import React from 'react';
import ReactDOM from 'react-dom';

class FetchGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: ''
    };
  //missing closing bracket
  }
  //

  componentDidMount() {
    fetch('https://api.github.com/users/workshopsjsmvd')
      //the API call did not succeed
      .then(res => res.json())
      //
      .then(res => {
        this.setState({
          name: res.name,
          location: res.location
        })
      });
  }

  render() {
    return [
      <h1 key="name">{`Nombre: ${this.state.name}`}</h1>,
      <h2 key="location">{`País: ${this.state.local}`}</h2>
    ];
  }
}

ReactDOM.render(
  <FetchGithub />,
  document.getElementById('root')
);
