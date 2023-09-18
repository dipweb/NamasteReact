import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIfo: {
        login: "Default",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/dipweb");
    const json = await data.json();
    this.setState({
      userIfo: json,
    });
  }

  render() {
    const { login, avatar_url, location } = this.state.userIfo;
    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>
          <img src={avatar_url} alt="Avtar" />
        </h4>
      </div>
    );
  }
}

export default UserClass;
