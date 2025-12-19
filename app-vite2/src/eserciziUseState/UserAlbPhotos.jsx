import { useEffect, useState } from "react";

export default function GallerySelector() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedAlbumId, setSelectedAlbumId] = useState("");
  const [selectedPhotoId, setSelectedPhotoId] = useState("");

  const [output, setOutput] = useState("Seleziona un utente");

  // 1️⃣ Carico USERS all’avvio
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setOutput("Errore nel caricamento utenti"));
  }, []);

  // 2️⃣ Quando cambia USER → carico ALBUMS
  useEffect(() => {
    if (!selectedUserId) return;

    setAlbums([]);
    setPhotos([]);
    setSelectedAlbumId("");
    setSelectedPhotoId("");
    setOutput("Caricamento album...");

    fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${selectedUserId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setOutput("Seleziona un album");
      })
      .catch(() => setOutput("Errore nel caricamento album"));
  }, [selectedUserId]);

  // 3️⃣ Quando cambia ALBUM → carico PHOTOS
  useEffect(() => {
    if (!selectedAlbumId) return;

    setPhotos([]);
    setSelectedPhotoId("");
    setOutput("Caricamento foto...");

    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbumId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setOutput("Seleziona una foto");
      })
      .catch(() => setOutput("Errore nel caricamento foto"));
  }, [selectedAlbumId]);

  // 4️⃣ Quando scelgo una PHOTO → mostro il risultato
  useEffect(() => {
    if (!selectedPhotoId) return;

    const photo = photos.find(
      (p) => String(p.id) === String(selectedPhotoId)
    );

    if (photo) {
      setOutput(`Hai scelto la foto: ${photo.title}`);
    }
  }, [selectedPhotoId, photos]);

  return (
    <div>
      <label>
        User:
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        >
          <option value="">-- scegli user --</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Album:
        <select
          value={selectedAlbumId}
          onChange={(e) => setSelectedAlbumId(e.target.value)}
          disabled={!selectedUserId}
        >
          <option value="">-- scegli album --</option>
          {albums.map((a) => (
            <option key={a.id} value={a.id}>
              {a.title}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Photo:
        <select
          value={selectedPhotoId}
          onChange={(e) => setSelectedPhotoId(e.target.value)}
          disabled={!selectedAlbumId}
        >
          <option value="">-- scegli foto --</option>
          {photos.slice(0, 50).map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
      </label>

      <div id="output" style={{ marginTop: "12px" }}>
        {output}
      </div>
    </div>
  );
}


