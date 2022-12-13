import  Sequelize  from "sequelize";
import dotenv from 'dotenv';

dotenv.config({path:'src/.env'})
//Inicio de la ORM
export const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASSWORD,
    {
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        dialect : 'postgres' //Hardcode
    }
);