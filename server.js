import Path from 'path';
import {Server} from 'hapi';
import {routeToReact} from './app/server'

import serverConfig from './config/server.json';

const env = process.env.NODE_ENV || 'development'
const server = new Server();
server.connection({
  port: serverConfig[env].port
});

server.start(() => {
  console.log('server running at: ', server.info.uri);
});

server.route([
  {  // Disallow robots for now
    method: 'GET',
    path: '/robots.txt',
    handler: (request, reply) => {
      reply('User-agent: *\nDisallow: /');
    }
  },
  {  // Route static assets from public folder
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: Path.normalize(__dirname + '/public')
      }
    }
  }
]);

server.ext('onPreResponse', (request, reply) => {
  if (typeof request.response.statusCode !== 'undefined') {
    return reply.continue();  // Request has already been handled
  }

  routeToReact(request, reply);
});
