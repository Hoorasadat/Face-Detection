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

  const setupRequestOptions = () => {
    const USER_ID = 'hoora_mir';
    const APP_ID = 'face-recognition';
    const IMAGE_URL = url;
    console.log(IMAGE_URL)
    const PAT = '39509417ced34ffa9e3bde36eb70b58c';

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": IMAGE_URL
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };
    return requestOptions
  }


  const onButtonClick = () => {
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';

    // NOTE: MODEL_VERSION_ID is optional
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", setupRequestOptions())
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  return (
    <div className="App">
      <ParticlesBg type="cobweb" color="#f9fcfc" num={250} bg={true}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {onInputChange} onButtonClick = {onButtonClick}/>
      {/* <FaceRecognition /> */}

    </div>
  );
}

export default App;
