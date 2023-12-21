import { useState } from "react";
import Photo from "../Photo/Photo";

function PhotoAlbum() {
  const [inpValue, setInpValue] = useState("");
  const [photos, setPhotos] = useState([]);

  function addPhoto() {
    if (!inpValue) return;
    setPhotos([...photos, inpValue]);
    setInpValue("");
  }

  function setInput(e) {
    setInpValue(e.target.value);
  }

  return (
    <>
      <div>
        <input value={inpValue} onChange={(e) => setInput(e)}></input>
        <button onClick={addPhoto}>Add</button>
      </div>
      {photos.length === 0 ? (
        <p>No data.</p>
      ) : (
        photos.map((p) => <Photo url={p} />)
      )}
    </>
  );
}

export default PhotoAlbum;
