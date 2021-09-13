import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "reactstrap";
import "../Dashboard.css";
import Media from "./Media";
import Posts from "./Posts";
import Profile from "./Profile";
import Error from "./Error";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.path}`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${match.path}/media`}>Explore Images</Link>
          </li>
          <li>
            <Link to={`${match.path}/posts`}>Posts</Link>
          </li>
          <li className="push-right">
            <Button color="danger" onClick={this.signOut}>
              Sign Out
            </Button>
          </li>
        </ul>
        <main role="main">
          <div className="main">
            <Switch>
              <Route path={`${match.path}/media`}>
                <Media />
              </Route>
              <Route path={`${match.path}/posts`}>
                <Posts />
              </Route>
              <Route exact path={`${match.path}`}>
                <Profile />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
 
export default withRouter(Dashboard);