const express = require('express');
const path = require('path')
const app = express();
const port = 3000

app.use('/listing/:listingId', express.static(path.join(__dirname, '/../public')))

app.use(express.static(path.join(__dirname, '/../public')))

app.listen(port, () => {
  console.log('server running on port', port)
})