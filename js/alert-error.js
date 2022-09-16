export const Alert = {
   error : document.querySelector('.alert-error'),
   open() {
    Alert.error.classList.add('open')
   },
   close() {
    Alert.error.classList.remove('open')
   }
}

Alert.error.onclick = () => {
  Alert.close()
}
