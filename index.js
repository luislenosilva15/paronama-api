const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/asset',express.static(__dirname + '/asset'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

require('./src/controllers/categoryController')(app);
require('./src/controllers/furnitureController')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})