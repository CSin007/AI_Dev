
//https://api.openai.com/v1/completions

const express = require('express')
const {generateMeta,generateImage} = require('./controllers/openController')

//setup
const app = express()
app.listen(4000, () => console.log('listening for requests on port 4000'))

//middleware
app.use(express.json())
app.use(express.static('public'))

//routes
app.post('/openai/meta', generateMeta)
app.post('/openai/image',generateImage)
