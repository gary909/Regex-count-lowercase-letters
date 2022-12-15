function lowercaseCount(str) {
    //remove all non-alphanumeric chars;
    let myStr = str.replace(/[^a-z0-9]/gi, '');
    //remove numbers;
    myStr = myStr.replace(/[0-9]/g, '');
    let myStr2 = myStr.toLowerCase()
    let myCnt = 0;

    if (myStr == '') { // check for empty
        return myCnt;
    }

    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i] === myStr2[i]) { // check for lower
            myCnt = myCnt + 1;
        }
    }
    return myCnt;
}

console.log(lowercaseCount("abc")); // 3
console.log(lowercaseCount("abcABC123")); // 3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); // 3
console.log(lowercaseCount("")); // 0
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); // 0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")); // 26