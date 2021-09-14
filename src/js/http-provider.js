
const jokeUrl     = 'https://api.chucknorris.io/jokes/random';



export const obtenerChiste =async()=>{

    try {
        const resp = await fetch(   jokeUrl  );
        if (!resp.ok) throw 'no se pudo realizar la peticion';
        const data = await resp.json();
    return data;
    } catch(err) {

    }
}

// H