console.log("Are you working?");

const movie = {
    title: "Interstellar",
    length: 169,
    year: 2014,
    director: {
        fname: "Christopher", 
        lname: "Nolan"
    },
    synopsis: "Space travel..."
}

const boxOffice = {
    daysInTheatre: 1000,
    revenue: 758000000
}

const { title : movieName, year, synopsis, director } = movie;
console.log(`The movie ${movieName} was release on ${year}. Directed by ${director.fname}`);

const colors = ["yellow", "blue", "green", "black"];
const [ one, two, _, four ] = colors;

console.log(`Colors ${one} and ${two} and ${_}`);

//destructure the parameter
const printMovie = ({ title, length, year, director, synopsis }, { daysInTheatre, revenue }) => {

    console.log("--------------------------");
    console.log(`Title: ${title}`);
    console.log(`Length: ${length}`);
    console.log(`Year: ${year}`);
    console.log(`Director: ${director.fname} ${director.lname}`);
    console.log(`Synopsis: ${synopsis}`);
    console.log(`Days in theatres: ${daysInTheatre}`);
    console.log(`Revenue: ${revenue}`);
    console.log("--------------------------");
}

printMovie(movie, boxOffice);

const printMovies = ({ title : t1, year : y1 }, {year : y2, title : t2, synopsis}) => {

}