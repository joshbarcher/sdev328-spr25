import sequelize from './../db/connection.js';
import { DataTypes } from 'sequelize';

//define what a movie table/object looks like
const schema = sequelize.define("movies", {
    moviesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    yearReleased: DataTypes.INTEGER,
    filmLength: DataTypes.INTEGER,
    shortSynopsis: DataTypes.TEXT,
    genre: DataTypes.STRING
})

//create the table
//await schema.sync(); //create table if it's not there
//await schema.sync({ force: true}); //drop the table (every time) and recreate it
await schema.sync({ alter: true}); //update the table (if it changes)

export default schema;