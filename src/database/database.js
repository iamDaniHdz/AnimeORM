import  Sequelize  from "sequelize";

// Inicio de la ORM
export const sequelize = new Sequelize(
    'railway',
    'postgres',
    '0MWUdl6L7Gt3HUhTVJsm',
    {
        host: 'containers-us-west-143.railway.app',
        port: '7461',
        dialect : 'postgres'
    }
);