/**
 * Created by play on 2018/4/7.
 */
var tesseract = require('node-tesseract')

function ocr (path) {
  const rs=tesseract.process(__dirname + '/' + path)
  return rs
}
async function ocr2 (path) {
  var rs= await tesseract.process(__dirname + '/' + path, function (err, text) {
    if (err) {
      return console.error(err)
    } else {
      return console.log('ocr2',text);
      // rs=text
      // return text
    }
  })
  console.log('rs',rs);
  return rs
}
const code_img_path = 'mdoc.jpeg'
let vc = ocr2(code_img_path)
console.log('vc',vc)