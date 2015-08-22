import Path from 'path';
import {Server} from 'hapi';
import apiRoutes from 'root/app/api/routes';
import {routeToReact} from 'root/app/server';

import serverConfig from 'root/config/server.json';

// Set global constants to know if we're server or client side
global.__SERVER__ = true;
global.__CLIENT__ = false;
global.__ROOT__ = __dirname;
global.__ARTICLE_ROOT__ = Path.resolve(__dirname, 'articles/')

const env = process.env.NODE_ENV || 'development';
const server = new Server();
server.connection({
  port: serverConfig[env].port
});

server.start(() => {
  console.log('server running at: ', server.info.uri);
});

const staticRoutes = [
  {  // Disallow robots for now
    method: 'GET',
    path: '/robots.txt',
    handler: (request, reply) => {
      return reply('User-agent: *\nDisallow: /')
          .type('text/plain');
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
];

const routes = staticRoutes.concat(apiRoutes);
server.route(routes);

server.ext('onPreResponse', (request, reply) => {
  if (typeof request.response.statusCode !== 'undefined') {
    return reply.continue();  // Request has already been handled
  }

  routeToReact(request, reply);
});
