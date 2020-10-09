import React from 'react';
import ReactDOM from 'react-dom';

class FetchGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //add state for loading
      isLoaded: false,
      //add state for user data
      user: null,
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
      .then(result => {
        this.setState({
          //change status to show loading
          isLoaded: true,
          //assign the API response to user
          user: result
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
    const { error, isLoaded, user } = this.state;
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
          {/*user user state, unnecessary key property  */}
          <h1>{`Nombre: ${user.name}`}</h1>
          {/* incorrect use of state property 'location' */}
          <h2>{`País: ${user.location}`}</h2>
        </>
      );
    }
  }
}

ReactDOM.render(
  <FetchGithub />,
  document.getElementById('root')
);
