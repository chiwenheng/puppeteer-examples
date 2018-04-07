/**
 * Created by play on 2018/4/7.
 */


// Recognize German text in a single uniform block of text and set the binary path

var options = {
  l: 'deu',//德国
  psm: 6,
  binary: '/usr/local/bin/tesseract'
};

tesseract.process(__dirname + '/path/to/image.jpg', options, function(err, text) {
  if(err) {
    console.error(err);
  } else {
    console.log(text);
  }
});