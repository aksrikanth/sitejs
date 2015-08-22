import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Layout from 'root/app/components/layout';
import Articles from 'root/app/components/articles/index';
import ParamsProxy from 'root/app/components/params_proxy';
import NotFound from 'root/app/components/not_found';

export default (
  <Route path='/' handler={Layout}>
    <Route name="article" path="articles/:articleId" handler={ParamsProxy} />
    <Route name="articles" path="articles" handler={Articles} />
    <DefaultRoute handler={Articles} />
    <NotFoundRoute name="not_found" handler={NotFound} />
  </Route>
);
