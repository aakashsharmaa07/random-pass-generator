const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*!";

const passLen = 8;


const randPassGen = (passLen) => {
    let pass = "";
    for (let i=0 ; i<passLen ; i++ ){
        let randIdx = Math.floor(Math.random()*chars.length);
        pass += chars[randIdx];
    }
    return pass;
}

let genBtn = document.querySelector("#genBtn");
let passwordDisplay = document.querySelector("#passwordDisplay");

genBtn.addEventListener("click", () =>{
    let randPass = randPassGen(passLen);
    passwordDisplay.innerText = randPass;    
});

