import React from 'react';
import Transmit from 'react-transmit';

class NotFound extends React.Component {
  render () {
    return (
      <div>
        <p>404</p>
        <p>The requested page was not found.</p>
      </div>
    );
  }
}

export default Transmit.createContainer(NotFound, {
  queryParam: {},
  queries: {}
});
