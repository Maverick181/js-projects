const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');
const apiKey ="c026368c7be293ca27c373a38b0d4361494d257d";

const emoji =[];
async function getEmoji(){
    let res =await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);
    let data = await res.json();
    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName : data[i].character,
            emojiCode : data[i].unicodeName,
        })
        
    }
} 
btnEl.addEventListener('click', () =>{
    const randnum = Math.floor(Math.random() * 1500);
    btnEl.innerText = emoji[randnum].emojiName ;
    emojiNameEl.innerText= emoji[randnum].emojiCode;    
}) 

getEmoji();