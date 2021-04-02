import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';

import './App.scss';

import Home from './../../pages/Home/';
import PageWrapper from '../../pages/PageWrapper';
import Profile from './../../pages/Profile';
import Playground from './../../pages/Playground';
import Lessons from './../../pages/Lessons';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <PageWrapper>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/playground" exact component={Playground} />
            <Route path="/lessons" exact component={Lessons} />
          </Switch>
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
