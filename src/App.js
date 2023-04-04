import React from 'react';
import ParticlesBg from 'particles-bg'
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" color="#f9fcfc" num={250} bg={true}/>
      {/* ddddddd */}
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}

    </div>
  );
}

export default App;
