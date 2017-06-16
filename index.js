var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');
var fs = require('fs');

fs.readdir("./test",function(err, files){
   if (err) { return console.error(err);
   }
   files.forEach( function (file){

      console.log( file ); 
      
      fs.appendFile('./tekst2.txt', file, function(err, data) {
            console.log("zapisano")
        });     
   });
});






