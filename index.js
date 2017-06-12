var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');
var fs = require('fs');


//fs.stat('./cat.jpg', function(err, stats) {
    //var statMode = new StatMode(stats);
    //console.log(statMode.toString());
//});


/*    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/

//Stwórz funkcję, która odczyta zawartość katalogu za pomocą funkcji fs.readdir
//zapisze je do nowo utworzonego pliku za pomocą metody fs.writeFile



fs.readdir("/BognaDEV/js-zad4/test",function(err, files){
   if (err) { return console.error(err);
   }
   files.forEach( function (file){

      console.log( file ); 
      
      fs.appendFile('/BognaDEV/js-zad4/tekst2.txt', file, function(err, data) {
            console.log("zapisano")
        });     
   });
});






