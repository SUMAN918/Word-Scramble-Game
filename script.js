const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let randWords = "";

let sWords = ["python", "javascript", "c++", "php", "java", "c#", "html", "css", "reactjs", "angularjs", "swift", "android", "sql", "api"];

const createNewWords = () =>{
    let ranNum = parseInt(Math.random()*sWords.length);
    // console.log(ranNum);
    let newTempSwords = sWords[ranNum];
    // console.log(newTempSwords.split(""));
    return newTempSwords;
};

const scrambleWords = (arr) =>{
    for(let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        // console.log(temp);
        let j = parseInt(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

btn.addEventListener("click", () =>{
    if(!play){
        play = true;
        btn.innerText = "Guess";
        guess.classList.toggle("hidden");
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        // console.log(randWords);
        msg.innerText = `Guess the word: ${randWords}`;
    }else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            // console.log("correct");
            play = false;
            msg.innerText = `Awesome It's Correct. It is ${newWords}`;
            btn.innerText = "Start Again";
            guess.classList.toggle("hidden");
            guess.value = "";
        }else{
            console.log("incorrect");
            msg.innerText = `Sorry! It's Incorrect. Plz try again: ${randWords}`;
        }
    }
});
