function getRandomNum(startNum, endNum){
    if(endNum > startNum){
        return Math.round(startNum - 0.5 + Math.random() * (endNum - startNum + 1));

    }
    return 0;
}
function checkLen(comment, maxLen){
    if(comment.length <= maxLen){
        return true;
    }
    return false;

}
