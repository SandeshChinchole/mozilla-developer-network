function rangeOfNumbers(startNum, endNum) {
    if (n < 1) {
        return [startNum];
    } else {
        const numArr = rangeOfNumbers(startNum, endNum-1);
        numArr.push(endNum);
        return numArr;
    }
}