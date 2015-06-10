# toPDF
Convert your code into PDF from within your node code . PDF gets generated in the same folder as the code calling 
it with the name `print.pdf` .

## Install
```
npm install toPDF
```

## Usage

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
![]()

2)
![]()

