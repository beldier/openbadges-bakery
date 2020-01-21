var bakery=require('openbadges-bakery-v2');
var fs = require('fs');

var args = process.argv.slice(2);
var file = args[0]+"";
var img=fs.readFileSync(file);

bakery.extract(img, function(err, data){
	console.log(data);
});
