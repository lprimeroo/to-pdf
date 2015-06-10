var path = require('path') ;
var fs = require('fs') ;
var pdf = require('phantomjs-pdf') ;

function pdfConverter(){
	var options = {
		"html": "print.html",
		"css": "main.css",
		"paperSize": { 
			format: 'A4', 
			orientation: 'portrait', 
			border: '1cm' 
		},
		"deleteOnAction": true
	} ;

	pdf.convert(options, function(result) {
		result.toBuffer(function (returnedBuffer) {}) ;
		var stream = result.toStream() ;
		var tmpPath = result.getTmpPath() ;
		result.toFile("print.pdf",function() {}) ;
	}) ;
}

function topdf(fileName,description,author){
	
	var heading = '<h1>' + fileName + '</h1>' + '\n';
	var subHeading = '<h2>' + description + '</h2>' + '\n' ;
	var subSubHeading = '<h3>' + author + '</h3>' + '\n' ;
	var dataStream = '' ;

	//fs.createReadStream(fileName).pipe(fs.createWriteStream('print.js')) ;

	fs.readFile(fileName, 'utf8', function (err,data) {
  		if (err) 
  			console.log('ERROR : ' + err );
  		dataStream = heading + subHeading + subSubHeading +  '<code>' + data + '</code>' ;
  		fs.writeFile('print.js', dataStream, function(err) {
    		if(err)
        		return console.log(err);
        	fs.rename('print.js','print.html',function(err) {
				if (err)
					console.log('ERROR : ' + err );
				pdfConverter();
			}) ;
		}); 
	});
}


topdf('index.js', 'lolhai', 'sarthak') ;