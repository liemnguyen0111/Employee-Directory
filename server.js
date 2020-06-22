const express = require('express');
const app = express();
const { join } = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(require("./routes"));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(join(__dirname, 'client/build', 'index.html'));
  });
}

require('./config')
  .then(() => {
      app.listen(PORT)
      console.log('http://localhost:5000')
    })
  .catch(err => console.error(err))