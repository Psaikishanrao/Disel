const express = require('express');
const fs = require('fs');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

const dbFilePath = path.resolve(__dirname, '../../db.json');
const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));

app.get('/api/:resource', (req, res) => {
  const resource = req.params.resource;
  const data = dbData[resource];

  if (!data) {
    return res.status(404).json({ error: 'Resource not found' });
  }

  res.json(data);
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports.handler = serverless(app);
