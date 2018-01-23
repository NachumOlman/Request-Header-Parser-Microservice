'use strict';


var http = require("http")
  , locale = require("locale")
  , supported = new locale.Locales(["en", "en_US", "ja"])
 
http.createServer(function(req, res) {
  var text = "";

  var os = require('os');

  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    text += 'addr: ' + add;
    text += " ,platform: " + os.platform();
    var locales = new locale.Locales(req.headers["accept-language"]);
    text += " ,language: " + locales.best(supported);
    
    res.writeHeader(200, {"Content-Type": "text/plain"})
    res.end(
      text
    )
  })

  
  
}).listen(8000)


