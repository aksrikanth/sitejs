import React from 'react';
import Transmit from 'react-transmit';

class Articles extends React.Component {
  render () {
    const count = this.props.count;
    return (
      <div>
        <h1>Hello</h1>
        <p>This blog has {count} articles.</p>
      </div>
    );
  }
}

export default Transmit.createContainer(Articles, {
  queryParam: {},
  queries: {
    count(queryParams) {
      return new Promise((resolve, reject) => {
        resolve(10);
      });
    }
  }
});
