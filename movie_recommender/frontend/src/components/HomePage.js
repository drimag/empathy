import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>HomePage</h1>;
    // return (
    //   <Router>
    //     <Switch>
    //       <Route exact path="/">
    //         <p>This is the home page</p>
    //       </Route>
    //       <Route path="/join" component={RoomJoinPage} />
    //       <Route path="/create" component={CreateRoomPage} />
    //     </Switch>
    //   </Router>
    // );
  }
}