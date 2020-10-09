import React from 'react';
import ReactDOM from 'react-dom';

class FetchGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //add state for loading
      isLoaded: false,
      name: '',
      location: '',
      //add state error
      error: null
      //
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
          //change status to show loading
          isLoaded: true,
          //
          name: res.name,
          location: res.location
        })
      },
      //add handle error
      error => {
        this.setState({
          //change status to show loading
          isLoaded: true,
          //
          error
        });
      //
      });
  }

  render() {
    //show the error if there is one
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    // show loading before API response
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else{
    //
      return (
        //change to Fragments
        <>
          <h1 key="name">{`Nombre: ${this.state.name}`}</h1>
          {/* incorrect use of state property 'location' */}
          <h2 key="location">{`País: ${this.state.location}`}</h2>
        </>
      );
    }
  }
}

ReactDOM.render(
  <FetchGithub />,
  document.getElementById('root')
);
