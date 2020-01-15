var friends = ['Calvin', 'Joshua', 'Mariah', 'Michael', 'Ryan'];

for (var i = 0; i < friends.length; i++) {
    for (var j = 99; j > 0; j--) {
        var k = j - 1;
        if (j === 1) {
            console.log(j + ' line of code in the file, ' + j + ' line of code, ' + friends[i] + ' strikes one out, clears it all out, ' + k + ' lines of code in the file.');
        } else if (j === 2) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code, ' + friends[i] + ' strikes one out, clears it all out, ' + k + ' line of code in the file.');
        } else {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code, ' + friends[i] + ' strikes one out, clears it all out, ' + k + ' lines of code in the file.');
        }
    }
}