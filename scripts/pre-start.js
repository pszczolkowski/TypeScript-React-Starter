const fs = require('fs');
const path = require('path');
const util = require('./util');
const ngrok = require('ngrok');
const ncp = require("copy-paste");

util.setHostVariable('dev');

ngrok.connect(3000, (err, url) => {
  util.updateConnectConfig(url);
    console.log(`project is available at ${url}`);

  ncp.copy(`${url}/atlassian-connect.json`);
  console.log('url copied to clipboard');
});
