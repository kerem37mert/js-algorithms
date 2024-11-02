const text = "Hi, it is a text";
const word = "its";

for(var i=0; i<= text.length - word.length; i++) {
    var j = 0;

    while(j<word.length && word[j] == text[i+j])
        j++;

    if(j == word.length)
        console.log("kelime bulundu");
}