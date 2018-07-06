try {
  const express = require('express')

  const next = require('next')
  var compression = require('compression')

  const port = process.env.PORT || 3000
  const dev = process.env.NODE_ENV !== 'production'
  const app = next({dev})

  const handle = app.getRequestHandler()

  app.prepare().then(() => {
    const server = express()

    server.use(compression())

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    let httpServer;
    if (process.env.NODE_ENV === 'development') {
      httpServer = require('http').createServer(app);
    } else {
      let fs = require('fs');
      let options = {
        ca: fs.readFileSync(process.env.CA),
        key: fs.readFileSync(process.env.KEY),
        cert: fs.readFileSync(process.env.CERT)
      };
      if (process.env.PROTOCOL === 'https') {
        httpServer = require('https').createServer(options, app);
      } else {
        httpServer = require('http').createServer(app);
      }
    }

    let port = process.env.PORT || 3000;
    httpServer.listen(port, function() {
      console.log(`server is running at port ${port}`)
    });
  })
} catch (e) {
  console.log(e)
}
