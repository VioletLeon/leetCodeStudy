/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stringArray = s.split(' ')
    console.log(stringArray)

    for (let i = 0; i < stringArray.length; i++){
        stringArray[i] = stringArray[i].split('').reverse().join('')
    }

    return stringArray.join(' ')
};
