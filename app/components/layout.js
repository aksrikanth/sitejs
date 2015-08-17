import React from 'react';
import {RouteHandler} from 'react-router';
import Transmit from 'react-transmit';

class Layout extends React.Component {
  render () {
    return (
      <div>
        <h1>Srikanth's Blog</h1>
        <RouteHandler />
      </div>
    );
  }
}

export default Transmit.createContainer(Layout, {
  queryParam: {},
  queries: {}
});
