import { subirImagen } from './http-provider';

const body = document.body; 
let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `

        <h1 class=mt-5>Subir Archivos</h1>
        <hr> 

        <label>Selecciona una fotografia: </label>
        <input type="file" accept="image/png, image/jpeg"/>

        <br>

        <img id="foto" class="img-thumbnail mt-2" src="">
    
    `

    const main = document.createElement('main');
    main.innerHTML = html;
    body.append(main);

    inputFile = document.querySelector('input');
    imgFoto   = document.querySelector('#foto');

}

const eventos = () => {

    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0];

        subirImagen( file )
            .then( url => imgFoto.src = url );

    })

}




export const init = () => {
    crearInputFileHtml();
    eventos();
}