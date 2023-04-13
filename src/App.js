import React, { useState } from 'react';
import ParticlesBg from 'particles-bg'
import './App.css';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

function App() {
  const [urlInput, setUrlInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [boxes, setBoxes] = useState([{}]);

  const onInputChange = (event) => {
    setUrlInput(event.target.value);
  }

  const setupRequestOptions = () => {
    const USER_ID = 'hoora_mir';
    const APP_ID = 'face-recognition';
    const IMAGE_URL = urlInput;
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
    setBoxes([{}]);
    setImageUrl(urlInput);

    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';

    // NOTE: MODEL_VERSION_ID is optional
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", setupRequestOptions())
      .then(response => response.json())
      .then(result => displayBoxes(calculateFaceLocation(result)))
      .catch(error => console.log('error', error));
  }

  const calculateFaceLocation = (clarifiData) => {
    const image = document.getElementById('image');
    const height = Number(image.height);
    const width = Number(image.width);
    const boxesDimentions = clarifiData.outputs[0].data.regions;
    const arrayOfBoxes = [];
    boxesDimentions.forEach(item => {
      const boxLocation = item.region_info.bounding_box;
      const leftCol = width * boxLocation.left_col;
      const topRow = height * boxLocation.top_row;
      const rightCol = width - (width * boxLocation.right_col);
      const bottomRow = height - (height * boxLocation.bottom_row);
      arrayOfBoxes.push({
        leftCol,
        topRow,
        rightCol,
        bottomRow,
      })
    });
    return arrayOfBoxes;
  }

  const displayBoxes = (dimentions) => {
    setBoxes(dimentions);
  }

  return (
    <div className="App">
      <ParticlesBg type="cobweb" color="#f9fcfc" num={250} bg={true}/>
      <Logo />
      <ImageLinkForm onInputChange = {onInputChange} onButtonClick = {onButtonClick}/>
      <FaceRecognition boxes={boxes} image = {imageUrl}/>
    </div>
  );
}

export default App;
