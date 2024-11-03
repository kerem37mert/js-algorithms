const text = "Herhangi bir yardım almadan linear search pseudocode yazınız.";
const word = "e";

const stringMatching = (text, word) => {
    const indexes = [];

        for(let i=0; i<text.length - word.length; i++) {
            let j = 0;
            while(j<word.length && word[j] == text[i+j])
                j++;

            if(j == word.length)
                indexes.push(i); 
        }

    return indexes;
} 

result = stringMatching(text, word);
if(!result.length)
    console.log("Aranan kelime bulunamadı.");
else
    console.log(result);