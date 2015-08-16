import React from 'react';
import Transmit from 'react-transmit';

class Layout extends React.Component {
  render () {
    return (
      <h1>Hello</h1>
    );
  }
}

export default Transmit.createContainer(Layout, {
  queryParam: {},
  queries: {}
});
