function printRange(rangeStart, rangeStop, skip) {
    var text = "";
    for (var i = rangeStart; i < rangeStop; i= i + skip) {
        text = text + i + ',';
    }
    return text.slice(0, -1);
}
console.log(printRange(2,10,2));
