import sequelize from './../db/connection.js';
import { DataTypes } from 'sequelize';

//define what a movie table/object looks like
const schema = sequelize.define("movies", {
    moviesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 40]
        }
    },
    yearReleased: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1900,
            max: 2030
        }
    },
    filmLength: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    shortSynopsis: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    genre: {
        type: DataTypes.STRING,
    }
})

//create the table
//await schema.sync(); //create table if it's not there
//await schema.sync({ force: true}); //drop the table (every time) and recreate it
await schema.sync({ force: true }); //update the table (if it changes)

export default schema;