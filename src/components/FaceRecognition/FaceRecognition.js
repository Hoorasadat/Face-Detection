/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function FaceRecognition({image}) {
    return(
        <div className='center mt2'>
            <img src={image} alt='image' width='500px' height='auto'/>
        </div>
    )

}

export default FaceRecognition;
