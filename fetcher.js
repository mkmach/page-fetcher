const fs = require('fs');
const request = require('request');
const URL = process.argv[2];
const localPath = process.argv[3];

request(URL, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  fs.writeFile(localPath, body, (error) => {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  });
});


