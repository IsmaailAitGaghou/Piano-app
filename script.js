const allKeys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.white-key')


function playSound(UrlKey) {
    new Audio(UrlKey).play();
    
}

function handleClick() {
    whiteKeys.forEach( whiteKey => {
        whiteKey.addEventListener('click', () => {

            whiteKey.classList.add('clicked')
            setTimeout( () => {
                whiteKey.classList.remove('clicked')
            }, 100)
        })
    })
}

handleClick()

allKeys.forEach( (key , i) => {
    let number = i < 9 ? '0' + (i + 1) : ( i + 1 );
    let UrlKey = '24-piano-keys/key'+ number +'.mp3'
    key.addEventListener('click', () => playSound(UrlKey))
})