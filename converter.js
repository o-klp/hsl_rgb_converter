// expected hue range: [0, 360)
// expected saturation range: [0, 1]
// expected lightness range: [0, 1]
var hslToRgb = function(hue, saturation, lightness){
  // based on algorithm from http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
  if( hue == undefined ){
    return [0, 0, 0];
  }

  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var huePrime = hue / 60;
  var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));


};