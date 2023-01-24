// map, filter, reduce and flatMap
const movies = [
    {
        title: 'Avatar',
        year: '2009',
        rating: 'PG-13'
    },
    {
        title: 'I Am Legend',
        year: '2007',
        rating: 'PG-13'

    },
    {
        title: '300',
        year: '2006',
        rating: 'R'
    },
    {
        title: 'The Avengers',
        year: '2012',
        rating: 'PG-13'
    },
    {
        title: 'The Wolf of Wall Street',
        year: '2013',
        rating: 'R'
    }
]

// Array that just contains the movie titles
const movieTitles = movies.map(e => e.title);
console.log(movieTitles);

// Array that contains only those movies that are PG-13
const pg13Rating = movies.filter(e => e.rating === 'PG-13');
console.log(pg13Rating);

// How many of the movies are rating R
const rRatingAmount = movies.reduce((acc, curr) => {
    if (curr.rating === 'R') {
        acc++;
    }
    return acc;
}, 0);
console.log(rRatingAmount);
