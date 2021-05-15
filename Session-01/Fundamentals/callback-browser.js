// Se não for um iFrame
document.getElementsByTagName('body')[0].onclick = function(event) {
    console.log('O evento ocorreu/n!', event.target)
}