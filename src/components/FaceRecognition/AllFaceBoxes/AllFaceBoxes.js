/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './AllFaceBoxes.css';

function AllFaceBoxes({boxes, image}) {
    const boxesDiv = [];
    boxes.forEach(item => {
        boxesDiv.push(
            <div
                className='bounding-box'
                key={boxes.indexOf(item)}
                style={{left: item.leftCol, top: item.topRow, right:item.rightCol, bottom: item.bottomRow}}>
            </div>
        )
    });

    if(Object.keys(boxes[0]).length !== 0){
        return <div>{ boxesDiv }</div>
    } else if (image !== ''){
        return(
            <p className='f5 fw5 yellow'>
                If you don't see the face detection, your image url either does not contain a face or is more than <strong>2000</strong> characters.
            </p>
        )
    }
}

export default AllFaceBoxes;
