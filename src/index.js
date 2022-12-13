import app from './app.js';
import {sequelize} from './database/database.js';
import dotenv from 'dotenv';
async function main(){
    try{
        dotenv.config({path:'src/.env'})
        await sequelize.sync({force:false});
        await sequelize.authenticate();
        console.log("Conexión a la base correcta");
        app.listen(process.env.PORT);
        console.log('Servidor ON');
    }catch(e){
        console.log(e);
    }
    
}

main();