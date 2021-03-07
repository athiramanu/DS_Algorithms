var minimumLengthEncoding = function(W) {
    let set = new Set(W);
    let result = 0;
    
    for (let word of W)
        if (set.has(word)){
            for (let i = 1; i < word.length; i++) {
                set.delete(word.slice(i))
            }}
    
    set.forEach(function(w){
        result += w.length + 1;
    });
    
    return result;
};