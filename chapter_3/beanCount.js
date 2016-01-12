function countBs(word){
    count = 0;
    for(var i=0;i<word.length;i++){
        if(word.charAt(i)==="B"){
            count++
        }
    }
    return count;
}

function countChar(word, key){
    count = 0;
    for(var i=0;i<word.length;i++){
        if(word.charAt(i)===key){
            count++
        }
    }
    return count;
}