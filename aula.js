import fetch from 'node-fetch';
async function pegarCep(){
    try {
        const resultado = await fetch('http://viacep.com.br/ws/69xx036210/json/')
        const resultadojson= await resultado.json()
        console.log(resultadojson);
    } catch (error) {
        console.log("Cep invalido")
    }

}
   

async function inicio(){
    await console.log('inicio')
    await pegarCep()
    await console.log('fim')
}

inicio ();