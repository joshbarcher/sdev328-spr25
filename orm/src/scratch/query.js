import schema from './../model/movie.schema.js';

const movies = await schema.findAll();
console.log(movies);

//print out all the movie titles
const titles = movies.map(el => el.dataValues.title);
console.log(titles);