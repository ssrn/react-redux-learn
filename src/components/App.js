import React, {Component} from 'react';

import Lookup from './Lookup';
import UserInfo from "./UserInfo";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userName: '',
      userImg: '',
      userId: '',
    };
  }

  fetchData = (login) => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        throw new Error("Not found");
      })
      .then((user) => {
        user.id ? dispatch(showUser(user.name, user.avatar_url)) : dispatch(userNotFound())
      })
      .catch((error) => {
        dispatch(lookupError());
      });
  };

  render() {
    return (
      <div className="App">
        <Lookup onSubmit={(login) => this.fetchData(login)}/>
        <UserInfo />
      </div>
    );
  }
}

export default App;
