import { DataTypes } from 'sequelize';
import sequelize from './../db/connection.js';

const schema = sequelize.define('pet', {
    petId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    petName: DataTypes.STRING,
    petDescription: DataTypes.TEXT
});

await schema.sync({ alter: true });

export default schema;