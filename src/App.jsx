import "./App.scss";
import FavoriteCartoons from "./components/FavoriteCartoons/FavoriteCartoons";
import PhotoAlbum from "./components/PhotoAlbum/PhotoAlbum";

function App() {
  return (
    <div>
      <PhotoAlbum />
      <hr></hr>
      <FavoriteCartoons />
    </div>
  );
}

export default App;
