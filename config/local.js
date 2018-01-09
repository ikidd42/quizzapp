

  /***************************************************************************
   * Your SSL certificate and key, if you want to be able to serve HTTP      *
   * responses over https:// and/or use websockets over the wss:// protocol  *
   * (recommended for HTTP, strongly encouraged for WebSockets)              *
   *                                                                         *
   * In this example, we'll assume you created a folder in your project,     *
   * `config/ssl` and dumped your certificate/key files there:               *
   ***************************************************************************/

  // ssl: {
  //   ca: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl_gd_bundle.crt'),
  //   key: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl.key'),
  //   cert: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl.crt')
  // },

  /***************************************************************************
   * The `port` setting determines which TCP port your app will be           *
   * deployed on.                                                            *
   *                                                                         *
   * Ports are a transport-layer concept designed to allow many different    *
   * networking applications run at the same time on a single computer.      *
   * More about ports:                                                       *
   * http://en.wikipedia.org/wiki/Port_(computer_networking)                 *
   *                                                                         *
   * By default, if it's set, Sails uses the `PORT` environment variable.    *
   * Otherwise it falls back to port 1337.                                   *
   *                                                                         *
   * In env/production.js, you'll probably want to change this setting       *
   * to 80 (http://) or 443 (https://) if you have an SSL certificate        *
   ***************************************************************************/

  // port: process.env.PORT || 1337,
  module.exports = {
    environment: 'development',
    log: {
      level: 'info'
    },
    connections: {
      mongodbTest: {
        host: 'localhost',
        database: 'quizap-test'
      },
      mongodbDev: {
        host: 'localhost',
        database: 'quizap-dev'
      }
    },
    sockets: {
      adapter: 'memory'
    },
    session: {
      adapter: 'memory'
    },
    rootUrl: 'http://localhost:1337',
    httpSocketKey: '123ABC',
    host: process.env.OPENSHIFT_NODEJS_IP || 'localhost',
    port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
    environment: process.env.NODE_ENV || 'development',
    explicitHost: process.env.OPENSHIFT_APP_DNS || 'localhost'
  };

