import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import Layout from './components/layout';

export default (
  <Route path='/'>
    <DefaultRoute handler={Layout} />
  </Route>
);
