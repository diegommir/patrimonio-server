import { Sequelize } from "sequelize"

const sequelize = new Sequelize('patrimonio', 'admin', 'admin@pat', {
    dialect: 'sqlite',
    storage: 'database.db',
    define: {
        freezeTableName: true, // Use table names as the same as the classe's
    }
})

/*
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
}).catch((e) => {
    console.error('Unable to connect to the database:', e)
})
*/

export default sequelize
