let  needle= 5;
    let haystack= [1, 2, 3, 4, 5];
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],

function listSorting(needle, haystack) {
   
   
    if (haystack.length === 0) {
    return -1
   } 
   for (let i = 0; i < haystack.length; i++) {
    return haystack.lastIndexOf(needle)
   }
   if (typeof (haystack[0]) === "object") {
   let row;
   let column;
   //let result = [row, column]

   for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < haystack[i].length; j++){
        
        if (matrix[i][j] === keystring) {
            column = matrix[i].lastIndexOf(needle)
            row = i      
              
    }
   }
}
if (row === undefined) return -1;
return [row, column]
}else{
    return haystack.lastIndexOf(needle)
}
}


module.exports = listSorting;
