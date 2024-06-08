const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.querySelector("#password1-el")
let password2 = document.querySelector("#password2-el")
let infoEl = document.getElementById("info-el")
let isNotEmpty = false

function generatePassword(){
    let numberOfCharacters = prompt("Enter the desired length for the password!"," ")
    let result1 = ""
    let result2 = ""
    if (numberOfCharacters > 7 && numberOfCharacters < 33){
        isNotEmpty = true
        for (let i = 0; i < numberOfCharacters; i++){
            let randomIndex1 = Math.floor(Math.random() * characters.length)
            let randomIndex2 = Math.floor(Math.random() * characters.length) 
            result1 += characters[randomIndex1]
            result2 += characters[randomIndex2]
        }
        
        password1.textContent = result1
        password2.textContent = result2
        infoEl.textContent = "  Click on the password to copy!"
    } else{
        
        alert("We were unable to generate a password of " + numberOfCharacters + " character(s).")
        isNotEmpty = false
        password1.textContent = ""
        password2.textContent = ""
        infoEl.textContent =  ""
    }
   
}

function copyText1(){
   
    if (isNotEmpty === true){
         let valueToCopy = password1.innerText
        
        let tempTextArea = document.createElement("textarea")
        
        tempTextArea.value = valueToCopy
        
        document.body.appendChild(tempTextArea)
        
        tempTextArea.select()
        
        document.execCommand("copy")
        
        
        document.body.removeChild(tempTextArea)
        
         infoEl.textContent = valueToCopy + "  has been copied!"        
    } else{
        infoEl.textContent =  "No password generated!"
    }
    
    
}

function copyText2(){
   
    if (isNotEmpty === true){
         let valueToCopy = password2.innerText
        
        let tempTextArea = document.createElement("textarea")
        
        tempTextArea.value = valueToCopy
        
        document.body.appendChild(tempTextArea)
        
        tempTextArea.select()
        
        document.execCommand("copy")
        
        
        document.body.removeChild(tempTextArea)
        
          infoEl.textContent = valueToCopy + "  has been copied!"        
    } else{
        infoEl.textContent =  "No password generated!"
    }
    
    
}
