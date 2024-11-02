const numbers = [3,2, 1];

for(var i=0; i<numbers.length-1; i++) {
    for(var j = 0; j<numbers.length-i-1;j++) {
        if(numbers[j] > numbers[j+1]) {
            var temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
        }
    }
}


for(var i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}