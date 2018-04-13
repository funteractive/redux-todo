import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import TodoListContainer from '../containers/TodoListContainer';
import Terms from '../components/Terms';

// eslint-disable-next-line
class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={TodoListContainer} />
            <Route exact path="/terms" component={Terms} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
