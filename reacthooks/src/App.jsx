import FavMovies from './FavMovies';

function App() {

  const displayMessage = "A List of My Favorite Movies";

  return (
   <div>
    <FavMovies customMessage={displayMessage}/>
   </div>
  )
}

export default App
