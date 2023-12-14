const removeFromArray = function(array, ...filters) {
    for (let i = 0; i < filters.length; i++) {
        let filter = filters[i];
        for (let j = 0; j < array.length; j++) {
            if (array[j] === filter) {
                array.splice(j, 1);
            }
        }
    } 
    return array;
};

removeFromArray([1,2,3,4], 3);
// Do not edit below this line
module.exports = removeFromArray;
