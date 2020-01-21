var args = process.argv.slice(2);
var file = args[0]+"";
var bakery=require('openbadges-bakery-v2');
var fs = require('fs');


	// prepare the assertion and image
	var img=fs.readFileSync(file);
	console.log(img);
	var theAssertion ={
		"uid": "123456789abcdefghi987654321jklmnopqr",
		"recipient": {
			"identity": "sha256$98765edcba98765edcba98765edcba",
			"type": "email",
			"hashed": true
		},
		"badge": "http://issuersite.com/badge",
		"verify": {
			"url": "http://issuersite.com/assertion",
			"type": "hosted"
		},
		"issuedOn": 1403120715
		};
	var options = {
		image: img,
		assertion: theAssertion,
	};
	//bake assertion into image
	bakery.bake(options, function(err, data){
		//give the baked badge a file name
		var fileName = 'badge.png';
		var imagePath = "baked/"+file;//"baked" directory
		//write the returned baked badge data to file
		fs.writeFile(imagePath, data, function (err) {
			
		});
	})
