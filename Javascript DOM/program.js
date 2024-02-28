
function countWords(str) {
    let words=str.toLowerCase().split(" ")
    let wordfreq = [];
    
    for(let word of words){
        if(wordfreq[word]){
            wordfreq[word]++;
        }
        else{
            wordfreq[word]=1;
        }
    }
    
    return wordfreq
    }
    // console.log(countWords("This is a sample string")); // Output: 5
    
    let str = "this is data data this is data"
    console.log(countWords(str));