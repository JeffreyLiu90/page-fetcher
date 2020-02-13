const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
let url = args[0]
let filepath = args[1]

request(url, (error, response, body) => {
  fs.writeFile(filepath, body, function (err) {
    if (err) throw err;
    console.log("Downloaded and saved " + fs.statSync(filepath)["size"] + " bytes to ./index.html.")
  

  });
});


