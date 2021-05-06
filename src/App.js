import react from 'react';
//react hookd membuat state
import { useState } from "react";
import "./App.css";
import "./Components/Avatar/Avatar.css";
import gambar from "./Components/img/25.jpg";
import Avatar from './Components/Avatar/Avatar';
import Card from './Components/Card/Card';
import CardUIUX from './Components/Card/CardUIUX';


function App() {
  //cara membuat state dalam react
  const [nameUser, setNameUser]=useState({
    absenSatu: "Nisa",
    absenDua: "Syaroh",
    absenTiga: "Sita"
  });

  const [nameCard, setCard]=useState({
    CardSatu: "Frontend",
    CardDua: "UI/IX",
  });


  return (
  <div className="avatar">
    <div className="App">
    <h1>Component</h1>
    <Avatar name={nameUser.absenSatu} sourceImage={gambar}/>
    <Avatar name={nameUser.absenDua} sourceImage={gambar}/>
    <Avatar name={nameUser.absenTiga} sourceImage={gambar}/>
    <Card
    judul={nameCard.CardSatu}
    deskripsi="Crouse tentang pelajaran Frontend"
    />
    <CardUIUX/>
    </div>
    </div>
  );
}

export default App;
