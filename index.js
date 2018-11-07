const download_file = require("download-file");

for(let i = 1992; i <= 2017; i++){
  download_file(
    "https://www.fhwa.dot.gov/bridge/nbi/" + i + "hwybronlyonefile.zip",
    {filename: "" + i + ".zip", directory: "."},
    function(err){
      if(err) console.log("err " + err);
      console.log("done with " + i);
    })
}
