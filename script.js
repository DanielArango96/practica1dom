// let header= document.getElementById("header")
// let logo=document.getElementById("logo")
// logo.alt='textoalternativo desde javascript'
// logo.src='https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg'


// let enlaces=document.getElementsByClassName("enlace")
// console.log(enlaces)
// enlaces[0].textContent='esto es un enlace'
// enlaces[0].href='https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiDr-rYteCEAxX3STABHUuUBCAQPAgJ'
// enlaces[0].target='_blank'

function mostrarImagen() {
    console.log("Click en este boton...")
    let logo = document.getElementById('logo')
    logo.src='https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg'
    console.log(logo)
}

function eliminarImagen() {
    console.log("Click en este boton...")
    let logo = document.getElementById('logo')
    logo.src=''
    console.log(logo)

}