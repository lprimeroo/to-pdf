# toPDF
Convert your code into PDF from within your node code . PDF gets generated in the same folder as the code calling 
it with the name `print.pdf` .

## Install
```
npm install toPDF
```

## Usage
`toPDF` takes 3 parameters : `filename` , `descriptions` and `author name ` .

Example :

1) Printing the same code :
```js
//test.js

var pdf = require('toPDF') ;

console.log("Tonight's gonna be a good night") ;

pdf.toPDF('test.js','Just a simple test file','Sarthak Munshi') ;
```

2) Printing another file :
```js
//test.js

var pdf = require('toPDF') ;

console.log("Tonight's gonna be a good night") ;

pd.toPDF('package.json','Printing the JSON','Sarthak Munshi') ;
```

## Output
1)
![](http://i57.tinypic.com/11uiw7n.jpg)

2)
![](http://i62.tinypic.com/28te6ht.jpg)

