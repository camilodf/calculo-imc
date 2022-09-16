import { Modal } from './modal.js'
import { Alert } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'
 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNaN = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNaN){
    Alert.open()
    return;
  }
  
  Alert.close()   

  const result = calculateIMC(weight,height)
  displayResultMessage(result) 
   
}

function displayResultMessage(result){
  const message =  `Seu IMC é ${result}`

  Modal.message.innerText = message    
  Modal.open()
}

inputHeight.oninput = () => Alert.close()
inputWeight.oninput = () => Alert.close()