//z algorithm for pattern matching
function findZarray(pattern,text){
    
        const concatString = pattern + '$' + text;
        const concatLength = concatString.length;
        const patternLength = pattern.length;
        const zArray = new Array(concatLength).fill(0);
        let left = 0;
        let right = 0;
    
        for (let i = 1; i < concatLength; i++) {
            if (i <= right) {
                zArray[i] = Math.min(right - i + 1, zArray[i - left]);
            }
    
            while (i + zArray[i] < concatLength && concatString[zArray[i]] === concatString[i + zArray[i]]) {
                zArray[i]++;
            }
    
            if (i + zArray[i] - 1 > right) {
                left = i;
                right = i + zArray[i] - 1;
            }
        }
    
        const occurrences = [];
        for (let i = patternLength + 1; i < concatLength; i++) {
            if (zArray[i] === patternLength) {
                occurrences.push(i - patternLength - 1);
            }
        }
    
        return occurrences;
    }
    
let pattern="abc"
let text="abcertabcfgabcghh"
  

console.log(findZarray(pattern,text))