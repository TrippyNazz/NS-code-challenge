const findSum = function(array) {
    // your code here - don't forget to return a number!
    let Sum = 0;

    for( let i = 0; i < array.length; i++ ){
        Sum += array[i]
    }

    return Sum;
};
  
  
const findFrequency = function(array) {
    // your code here - don't forget to return an object!

    if( array.length === 0){
        return null;
    }

    let Temp = {};

    for( let i = 0; i < array.length; i++ ){
        let index = array[i];

        if( Temp[index] == null ){
        Temp[index] = 1;
        }else{
        Temp[index]++;
        }
    }

    let maximumFrequency = 1;
    let minimumFrequency = 1;

    let maxIndex = 0
    let minIndex = 0;

    for(j in Temp){
        if( Temp[j] > maximumFrequency ){
        maxIndex = j;
        maximumFrequency = Temp[j];
        }

        if( Temp[j] <= minimumFrequency ){
        minIndex = j;
        minimumFrequency = Temp[j];
        }
    }

    let obj = {
        most: maxIndex,
        least: minIndex
    };

    return obj;
};
  
  
  
const isPalindrome = function(str) {
    // your code here - don't forget to return a boolean!
    if( str.length === 0 ){
        return false;
    }

    let length = str.length;
    for( let i = 0; i < length/2; i++ ){
        let left = str[i];
        let right = str[length - 1 - i];

        if( left !==right ){
        return false;
        }
        return true;
    }
};
  
  
const largestPair = function(array) {
    // your code here - don't forget to return a number!
    let Pair1;
    let Pair2;

    let ResultFinal = [];


    for( let i = 0; i < array.length; i++ ){
        Pair1 = array[i];
        Pair2 = array[i + 1];
        
        let result = Pair1 * Pair2;
        
        if( result ){
            ResultFinal.push(result)
        }
    }

    return Math.max(...ResultFinal);
};
  
  
const removeParenth = function(str) {
    // your code here - don't forget to return a string!

    let updatedString = '';

    let tempArray = str.split('');
    let open;
    let close;

    for( let i = 0; i < tempArray.length-1; i++ ){
        if( tempArray[i] === '(' ){
        open = i;
        }

        if( tempArray[i] === ')' ){
        close = i;
        }
    }

    tempArray.splice(open, close-open+1);

    updatedString = tempArray.join('');

    return updatedString;
};

  
const scoreScrabble = function(str) {
    // your code here - don't forget to return a number!

    let Word = str.split('');

    let scores = {
        a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
        d: 2, g: 2,
        b: 3, c: 3, m: 3, p: 3,
        f: 4, h: 4, v: 4,
        w: 4, y: 4,
        k: 5,
        j: 8, X: 8,
        q: 10, z: 10
    }

    let FinalScore = 0;
    for( let i = 0; i < Word.length; i++ ){
        FinalScore += scores[Word[i]];
    }
    return FinalScore;
};
