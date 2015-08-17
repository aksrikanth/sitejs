import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Layout from './components/layout';
import Articles from './components/articles/index'
import NotFound from './components/not_found';

export default (
  <Route path='/' handler={Layout}>
    <Route path="articles" handler={Articles} />
    <DefaultRoute handler={Articles} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
