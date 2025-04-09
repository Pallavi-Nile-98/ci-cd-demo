function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
  
  const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('CI/CD Demo App Deployed!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
