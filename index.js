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

		fs.unlink('print.html',function() {
			fs.unlink('print.js',function() {
				fs.unlink('main.css',function () {}) ;
			}) ;
		}) ;
	}) ;
}

module.exports =  {

	toPDF: function(fileName,description,author) {
		var heading = '<h1>' + fileName + '</h1>' + '\n';
		var subHeading = '<h2>' + description + '</h2>' + '\n' ;
		var subSubHeading = '<h3>' + author + '</h3>' + '\n' ;
		var dataStream = '' ;

		//fs.createReadStream(fileName).pipe(fs.createWriteStream('print.js')) ;
		cssContent = "h1, h2, h3 { text-align: center; }" ;

		fs.writeFile('main.css',cssContent, function (err) {
			if (err)
        			console.log('ERROR : ' + err );
		});

		fs.readFileSync(fileName).toString().split('\n').forEach(function (line) { 
    		var newLine = line + '<br />';
    		fs.appendFileSync("print.js", newLine.toString() + "\n");
		});

		fs.readFile('print.js', 'utf8', function (err,data) {
  			if (err) 
  			console.log('ERROR : ' + err );
  			dataStream = heading + subHeading + subSubHeading +  '<code>' + data + '</code>' ;
  			fs.writeFile('print2.js', dataStream, function(err) {
    			if (err)
        			console.log('ERROR : ' + err );
        		fs.rename('print2.js','print.html',function(err) {
					if (err)
						console.log('ERROR : ' + err );
				pdfConverter();
				}) ;
			}); 
		});
	}

};

