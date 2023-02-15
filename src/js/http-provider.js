
// CLOUDINARY 

const cloudPreset = 'nwnozw7d';
const cloudURL    = 'https://api.cloudinary.com/v1_1/ddomdejvv/upload';


// EL ARCHIVO SERIA DE TIPO FILE
export const subirImagen = async ( archivoSubir ) => {

    const formData = new FormData(); 
    formData.append('upload_preset', cloudPreset );
    formData.append('file', archivoSubir );

    try {

        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        }); 

        if (resp.ok) {
            const cloudResp = await resp.json() 
            console.log(cloudResp);
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (err){

        throw err;

    }


}
