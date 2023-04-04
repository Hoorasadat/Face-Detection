import React, { useState } from 'react';
import ParticlesBg from 'particles-bg'
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

function App() {
  const [url, setUrl] = useState("");

  const onInputChange = (event) => {
    setUrl(event.target.value);
  }

  console.log(url);

  return (
    <div className="App">
      <ParticlesBg type="cobweb" color="#f9fcfc" num={250} bg={true}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {onInputChange}/>
      {/* <FaceRecognition /> */}

    </div>
  );
}

export default App;
