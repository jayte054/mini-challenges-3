

function listSorting(needle, haystack) {
    if (haystack.length === 0) {
        return -1
    }
    let lastIndex = 0
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] === needle){
        lastIndex++
    }
    }
    
    if (typeof (haystack.length[0]) === "object"){
        let row;
        let column;
        
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < haystack[i].length; j++) {
            if (haystack[i][j] === needle) {
                row = haystack.lastIndexOf(needle)
                column = i
            }
        }

    }
    if (result[0] === undefined) return -1;
    return indexArray   
} else {
    return haystack.lastIndexOf(needle)
}
}  
console.log(listSorting(200, [
    [100, 200, 300],
    [300, 200, 100],
    [300, 100, 200],
    [200, 100, 300],
    [100, 200, 300],
  ]))
module.exports = listSorting;
