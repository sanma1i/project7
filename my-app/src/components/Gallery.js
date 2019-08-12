import React from 'react';
import Photos from './Photos.js';
// import NotFound from './NotFound.js';

const Gallery = (props) => {
    const results = props.data;
    let photos

    // if (props.isLoading) {
    photos = results.map(photo =>
        <Photos url={
            photo.url_o
        }
            key={photo.id}
        />
    );

    // } else if (props.isLoading === false) {
    //     photos = <NotFound />
    // }

    return (
        <div className="photo-container" >
            <h2>{props.title}</h2>
            <ul>{photos} </ul>
        </div>
    );
};
export default Gallery;