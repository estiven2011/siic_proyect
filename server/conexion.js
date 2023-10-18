const oracle = require('oracledb');

async function run(){

    let conect;

    try{

        conect = await oracle.getConnection({
            user: "SYSTEM",
            password: "0000",
            connectString: "localhost/"
        })

        console.log ('Conectado a oracle exitosamente');

        if(conect){
            try {
                await conect.close();
            } catch (err2) {
                console.log('Error al cerrar la conexion',err2);
            }   
        }
    
    }catch(err){
        console.log('Error al crear la conexion',err);
    }
}

run()