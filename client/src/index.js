import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './HomeContainer';
import HeroesContainer from './heroes/HeroesContainer';
import PostHeroContainer from './heroes/PostHeroContainer';
import VillainsContainer from './villains/VillainsContainer';
import PostVillainContainer from './villains/PostVillainContainer';
import EditHeroContainer from './heroes/EditHeroContainer';
import './index.css';
require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/home' component={Home}/>
      <Route path='/heroes' component={HeroesContainer}/>
      <Route path='/post' component={PostHeroContainer}/>
      <Route path='/villains' component={VillainsContainer}/>
      <Route path='/post' component={PostVillainContainer}/>
      <Route path='/heroes/edit/:heroId' component={EditHeroContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
