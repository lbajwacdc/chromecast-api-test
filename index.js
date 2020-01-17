const express = require('express')
const app = express()
const port = 3000

app.get('/lienmessage', (req, res) => res.send('Hi Lien this message is being delivered by the server!'))

app.listen(port, () => console.log(`Server listening on PORT: ${port}!`))