const input = document.getElementById("noOfWords");
const container = document.querySelector(".container");

const generateWord = (n) =>{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text="";

    for(let i = 0;i<n;i++){
        let random = (Math.random()*25).toFixed(0);
        text += letters[random];
    }
    return text;
}

const generatePara = () =>{
    numOfWords = Number(input.value);
    const rand = (Math.random()*15).toFixed(0);
    let data = "";
    for(let i = 0;i<numOfWords;i++){
        data += generateWord(rand);
        data += " ";
    }
    const para = document.createElement("p")
    para.innerText = data;
    para.setAttribute("class","paras");
    container.append(para);
}