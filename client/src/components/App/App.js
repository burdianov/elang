import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';

import store from '../../redux/store';

import Navbar from '../Navbar';
import Home from './../../pages/Home/';
import PageWrapper from '../../pages/PageWrapper';
import Profile from './../../pages/Profile';
import Playground from './../../pages/Playground';
import Lessons from './../../pages/Lessons';
import Signin from './../../pages/Signin';
import Register from '../../pages/auth/Register';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <PageWrapper>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/playground" exact component={Playground} />
            <Route path="/lessons" exact component={Lessons} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Register} />
          </Switch>
        </PageWrapper>
      </div>
    </Provider>
  );
}

export default App;
