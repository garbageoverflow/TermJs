const {exec} = require("child_process");
var http = require("http");
var fs = require("fs");
var port = '8080'
var html_document_path = './index.html'

// create server
fs.readFile(html_document_path, function (err, html) {
  if (err) throw err;

  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(port);
});

var appearance = {
  colors: {
    background: '#000',
    foreground: '#fff',
    selection: '#f1f1f1',
  },
  cursor: {
    color: '#fff',
    blink: true,
  },
  size: {
    height: '250px',
    width: '500px'
  }
}

function attach(id) {

}

function writeLine(data) {

}

function run(comm) {
  this.comm = comm;
  exec(`${comm}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`${stdout}`)
  });
}

module.exports = {
  appearance,
  attach,
  writeLine,
  run,
};
