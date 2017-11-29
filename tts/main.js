// TODO take out words w/out vowels (lose acryonyms)
// TODO create some functions/filters we can implement live to stop spamming / mis-use
// TODO take out all punctuation before NLP
//      python way RegEx: new_sentence = re.sub('[^A-Za-z0-9\s]+', '', sentence)


var rita = require('rita');

var rs = rita.RiString("The elephant took a bite!");
// console.log( rs.features() );
// console.log( rs.pos() );



var sentence = 'this is a simple sentence with some proper names like Disneyland and my favorite parent. love?';
console.log( rita.getPosTags(sentence) );
