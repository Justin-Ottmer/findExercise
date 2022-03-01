function findUserByUsername(arr, username) {
    return arr.find(function(str) {
        return str.username === username;
    });
}


//need to review
function removeUser(arr, username) {
    const foundIdx = arr.findIndex(function(str) {
        return str.username === username;
    })
    if(foundIdx === -1) return;

    return arr.splice(foundIdx, 1)[0];
    //I understand you are removing one item at the found index
    //but I do not understand the logic to "[0]
}