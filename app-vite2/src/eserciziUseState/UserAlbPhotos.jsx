import { useEffect, useState } from "react";

export default function GallerySelector() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedAlbumId, setSelectedAlbumId] = useState("");
  const [selectedPhotoId, setSelectedPhotoId] = useState("");

  const [output, setOutput] = useState("Seleziona un utente");

  // dopo ci mettiamo le fetch qui...

  return (
    <div>
      {/* select user */}
      {/* select album */}
      {/* select photo */}
      <div id="output">{output}</div>
    </div>
  );
}
