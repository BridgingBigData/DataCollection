var http = require('http');
var fs = require('fs');
const unzip = require('unzip');


for(let i = 1992; i<=2017; i++){
  let filename = "" + i + ".zip";

  fs.createReadStream(filename)
  .pipe(unzip.Parse())
  .on('entry', function (entry) {
    var fileName = entry.path;
    var type = entry.type; // 'Directory' or 'File'
    var size = entry.size;
    if (type == "File" && fileName.endsWith(".txt")) {
      console.log("deflating " + i);
      entry.pipe(fs.createWriteStream("" + i + ".txt"));
    } else {
      entry.autodrain();
    }
  });

}
