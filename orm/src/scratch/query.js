import schema from './../model/movie.schema.js';
import { Op } from 'sequelize';

const movies = await schema.findAll();
//console.log(movies);

//print out all the movie titles
const titles = movies.map(el => el.dataValues.title);
//console.log(titles);

// select title, year from movies
const projected = await schema.findAll({
    attributes: ['title', 'yearReleased', 'genre']
})
console.log(projected.map(row => row.toJSON()));

const movieObjs = projected.map(row => row.get({ plain: true }));

for (const movie of movieObjs) {
    console.log(movie.title);
}

// select title, year from movies where genre = "comedy"
const comedyMovies = await schema.findAll({
    attributes: ['title', 'yearReleased', 'genre'],
    where: {
        genre: "War",
        yearReleased: {
            [Op.gte]: 2019
        }
    }
})
console.log(comedyMovies.map(row => row.toJSON()));

const badMovie = {
    title: "",
    yearReleased: 100,
    filmLength: 0,
    genre: "action123"
}

//this should give us an error
await schema.create(badMovie);