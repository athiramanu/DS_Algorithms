/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    
    for (let i = 0; i < flowerbed.length && n > 0;) {
        
        if (flowerbed[i] == 0 && flowerbed[i-1] != 1 && flowerbed[i+1] != 1) {
            n--;
            i += 2;
        } 
        else if (flowerbed[i] == 0) {
            i++;
        }
        else {
            i += 2;
        }
    }
    
    return n == 0;
};