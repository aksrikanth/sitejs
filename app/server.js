import React from 'react';
import Router from 'react-router';
import Transmit from 'react-transmit';
import routes from 'root/app/routes';

export function routeToReact(request, reply) {
  Router.run(routes, request.path, (Handler, router) => {
    Transmit.renderToString(Handler).then(({reactString, reactData}) => {
      let template = (
        `<!doctype html>
        <html lang="en-us">
          <head>
            <meta charset="utf-8">
            <title>Srikanth's Blog</title>
            <link rel="shortcut icon" href="/public/favicon.png">
          </head>
          <body>
            <div id="react_root">${reactString}</div>
          </body>
        </html>`
      );
      reply(Transmit.injectIntoMarkup(
        template,
        reactData,
        ['/public/dist/client.js']
      ));
    }).catch((error) => {
      reply(error.stack).type('text/plain').code(500);
    });
  });
}
