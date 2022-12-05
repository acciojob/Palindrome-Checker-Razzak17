// complete the given function

function palindrome(str){
  str = str.toLowerCase();
    console.log(str)
    for(let i = 0; i < str.length/2; i++){
        if(str[i] != str[str.length - 1-i])
        return false;
    }
    return true;
}
module.exports = palindrome
