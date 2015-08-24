import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Layout from 'modules/ui-layout';
import Articles from 'modules/ui-articles';
import ParamsProxy from 'modules/ui-params_proxy';
import NotFound from 'modules/ui-not_found';

export default (
  <Route path='/' handler={Layout}>
    <Route name="article" path="articles/:articleId" handler={ParamsProxy} />
    <Route name="articles" path="articles" handler={Articles} />
    <DefaultRoute handler={Articles} />
    <NotFoundRoute name="not_found" handler={NotFound} />
  </Route>
);
