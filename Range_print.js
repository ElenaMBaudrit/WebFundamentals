// Print range (2,10,2);
// would print 2,4,6,8.
// Should go UP TO, but NOT INCLUDING the end point.

function printRange(startPT, endPT, skipAmount){
    for (var i=startPT; i < endPT; i+= skipAmount){
    console.log(i);
}
}
printRange(2, 10, 2);