import app from './app.js';
import {sequelize} from './database/database.js';

async function main(){
    try{
        await sequelize.sync({force:false});
        await sequelize.authenticate();
        console.log("Conexión a la base correcta");
        app.listen(3000);
        console.log('Servidor ON');
    }catch(e){
        console.log(e);
    }
    
}

main();