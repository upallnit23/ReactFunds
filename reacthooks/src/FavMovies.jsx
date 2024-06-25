import { useState } from 'react';

const FavMovies = (props) => {
    const [movies, setMovies] = useState(
    [{movies:'Clue', 
        description:'1980s fictional mystery'},
        {movie:'A Raisin in the Sun', 
        description:'1959 african american play which debuted on Broadway'},
        {movie:'Clueless',
        description:'1995 American pop-culture coming of age film'},
        {movie:'Bad Boys',
        description:'1995 action packed cop and robbers movie'},
        {movie:'Black Panther',
        description:'2018 Marvel super-hero movie'}
        ]);

const toggleMovie = (index) => {
    setMovies(movies.map((index) => {
        if (movie.index === index) {
            return { ...index, hidden: !index.hidden};
        }
        return index;
    }));
}

return (
    <div>
        <h2>My Favorite Movies</h2>
        <ul>
            /*{movies.map((movie, index) => (
                <li key={index}>{movie}</li>
            ))}*/
            {movies.map((movie) => (
                <li key={index} onClick={() => toggleMovie(movie)}>
                    {movies.description}
                </li>
            ))}

        </ul>
        
    </div>
)
}

export default FavMovies