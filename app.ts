const express = require('express')
// @ts-ignore
const config = require('config')
const mongoose = require('mongoose')
// @ts-ignore
const path = require('path')

const port = config.get('port') || 5000
const app = express()

app.use(express.json())

app.use('/api/music', require('./routes/music.route'))
app.use('/api/music',
  express.static(path.resolve(__dirname, 'data')),
)

// Send static files & index.html in Production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (_req: any, res: any) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
  )
}

(async () => {
  try {
    await mongoose.connect(config.get('mongoUrl'))
    app.listen(port, () => {
      console.log(`App has been started on port: ${port}`)
    })
  } catch (err: any) {
    console.error('Server Error', err.message)
    process.exit(1)
  }
})()
