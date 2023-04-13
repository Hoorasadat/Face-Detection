/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import AllFaceBoxes from './AllFaceBoxes/AllFaceBoxes'

function FaceRecognition({boxes, image}) {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='image' src={image} alt='' width='500px' height='auto'/>
                <AllFaceBoxes boxes={boxes}/>
            </div>
        </div>
    )
}

export default FaceRecognition;
