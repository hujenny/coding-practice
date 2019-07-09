/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 * 
 * This function returns the most common word in the paragraph where the word in the in the list of banned words.
 *
 */
var mostCommonWord = function(paragraph, banned) {
    var specialChars = "~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=";
    var strippedParagraph = paragraph.replace(/[specialChars]/g, " ").toLowerCase();
    var strippedParagraph = strippedParagraph.replace(/\s\s/g," ");
    var words = strippedParagraph.split(" ");
    var mostFrequent = "";
    var counts = {};
    var compare = 0;
    
    for (var i=0; i< words.length; i++) {        
        var word = words[i];        
        if (banned.indexOf(word) > -1) continue;        
        if (counts[word] === undefined) {
            counts[word] = 1;
        }
        else {
            counts[word] = counts[word] + 1;
        }
        if (counts[word] > compare) {
            compare = counts[word];
            mostFrequent = word;
        }        
    }
    return mostFrequent;
};
