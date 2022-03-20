const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(
    `C:/Users/farou/OneDrive/Bureau/Programming/node-informational/index.html`
  );
});

app.get('/about', (req, res) => {
  res.sendFile(
    `C:/Users/farou/OneDrive/Bureau/Programming/node-informational/about.html`
  );
});

app.get('/contact-me', (req, res) => {
  res.sendFile(
    `C:/Users/farou/OneDrive/Bureau/Programming/node-informational/contact-me.html`
  );
});

app.get('*', (req, res) => {
  res.sendFile(
    `C:/Users/farou/OneDrive/Bureau/Programming/node-informational/404.html`
  );
});

app.listen(3000);
