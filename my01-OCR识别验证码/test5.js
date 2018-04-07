/**
 * Created by play on 2018/4/7.
 */

var tesseract = require('node-tesseract')

var rs =  tesseract.process(__dirname + '/' + 'mdoc.jpeg', function (err, text) {
    if (err) {
      return console.error(err)
    } else {
      // return
      console.log('ocr2', text)
      // rs=text
      return text
    }
  }
)
console.log('rs', rs)