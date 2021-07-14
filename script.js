
function rollDice(){
    return Math.floor(Math.random() * 6) + 1     //gira um dado 1x
}


function rollDices (){
return (rollDice() + rollDice());    //gira um par de  dados 1x
}   

let frequencia = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let soma = 0
for(let i = 0; i < 1000; i++){                  //gira um par de dados 1000x    
    frequencia[rollDices()-2] += 1  
}

document.body.style.textAlign="center"

let divP = document.createElement('div')
divP.id='divP'

document.body.appendChild(divP)

for(let i = 2; i <= 12; i++){
    let p = document.createElement('p')
    p.innerText = i+': '+ frequencia[i-2]
    document.querySelector('#divP').appendChild(p)
}
let box = document.createElement('div')
box.id ='box'
box.style.display = "flex"
box.style.flexDirection= "column"
box.style.alignItems = "flex-start"

document.body.appendChild(box)
for(let i = 2; i <= 12; i++){
    div = document.createElement('div')
    div.style.background = 'black'
    div.style.width = ((frequencia[i-2]*100)/1000)*5 +'%'
    div.style.maxWidht = ''
    div.style.height ='50px'
    div.style.textAlign='start'
    div.style.margin = '1px'
    div.style.color='white'
    div.style.fontWeight="bold"
    
    
    div.innerText = i+': '+(frequencia[i-2]*100)/1000 + '%'
    document.querySelector('#box').appendChild(div)
}