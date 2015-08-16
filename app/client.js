import React from 'react';
import Router from 'react-router';
import Transmit from 'react-transmit';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  Transmit.render(Handler, {}, document.getElementById('react_root'));
});

// Detect if server side render has been discarded due to invalid checksum
if (process.env.NODE_ENV !== 'production') {
  const reactRoot = window.document.getElementById('react_root');

  if (!(
        reactRoot && 
        reactRoot.firstChild && 
        reactRoot.firstChild.attributes && 
        reactRoot.firstChild.attributes['data-react-checksum']
  )) {
    console.error('Server side render was rejected. Make sure the initial render does not contain any client side code.');
  }
}
