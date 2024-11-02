const numbers = [1, 5, 6 ,8, 7, 8, 9, 4, 1];

const linerSearch = (key, arr) => {
    for(var i=0; i< arr.length; i++) {
        if(arr[i] == key)
            return i;
    }

    return -1;
}

console.log(linerSearch(88, numbers));