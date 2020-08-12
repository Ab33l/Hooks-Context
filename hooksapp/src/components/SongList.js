import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Rose Gold", id: 1 },
    { title: "Both", id: 2 },
    { title: "Only You Freestyle", id: 3 },
    { title: "Options", id: 3 },
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  useEffect(() => {
    console.log("Change made in age value", age);
  }, [age]);

  useEffect(() => {
    console.log("Change made in song list", songs);
  }, [songs]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Adds 1 to Age: {age}</button>
    </div>
  );
};

export default SongList;
