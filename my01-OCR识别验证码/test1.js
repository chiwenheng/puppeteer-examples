/**
 * Created by play on 2018/4/7.
 */

var tesseract = require('node-tesseract');

// Recognize text of any language in any format
tesseract.process(__dirname + '/mdoc.jpeg',function(err, text) {
  if(err) {
    console.error(err);
  } else {
    console.log(text);
  }
});

//
tesseract.toString()