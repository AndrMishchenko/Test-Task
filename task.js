const inputText = 'C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup'

const checkLetter = () => {
    const arrText = inputText.split(' ')
    let arrUniqSymb = [];

    for(let a = 0; a < arrText.length; a++){
        const aloneWord = arrText[a];
        let uniqueSymb = '';
        

        for(let b = 0; b < aloneWord.length; b++){
            const symbols = aloneWord[b];
            const remainingChars = aloneWord.substring(b + 1);

            if(!remainingChars.includes(symbols)){
                uniqueSymb = symbols;
                break;
            }
        }
        if(uniqueSymb !== ''){
            arrUniqSymb.push(uniqueSymb)
        }
    }
    for (let c = 0; c < arrUniqSymb.length; c++){
        const addSymb = arrUniqSymb[c];
        if(arrUniqSymb.indexOf(addSymb) === arrUniqSymb.lastIndexOf(addSymb)){
            return addSymb;
        }
    }
    return null
    
}
console.log(checkLetter())