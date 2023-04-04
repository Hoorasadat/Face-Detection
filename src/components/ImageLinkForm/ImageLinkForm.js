import React from 'react';
import './ImageLinkForm.css'

function ImageLinkForm() {
    return(
        <div>
            <p className='f3 fw5 white'>
                {'This magic app will detect faces in your pictures. Try it!'}
            </p>
            <div className='form center pa4 br3'>
                <input className='f4 pa2 w-70' type='text'></input>
                <button className='pointer f4 w-30 link grow ph3 pv2 white bg-dark-blue'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;
