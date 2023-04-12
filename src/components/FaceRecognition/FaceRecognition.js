/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './FaceRecognition.css';

function FaceRecognition({faceBox, image}) {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='image' src={image} alt='' width='500px' height='auto'/>
                <div
                    className='bounding-box'
                    style={{left: faceBox.leftCol, top: faceBox.topRow, right:faceBox.rightCol, bottom: faceBox.bottomRow}}>
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition;
