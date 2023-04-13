/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './AllFaceBoxes.css';

function AllFaceBoxes({boxes}) {
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
    return(
        <div>{ boxesDiv }</div>
    )
}

export default AllFaceBoxes;
