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

    server.listen(port, (err) => {
      if (err)
        throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
} catch (e) {
  console.log(e)
}
