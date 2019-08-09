import React from 'react';
import Photos from './Photos.js';
import NotFound from './components/NotFound.js';

const Gallery = (props) => {
    const results = props.data;
    let photos;

    if (results.length > 0) {
        photos = prop.data.map(photo =>
            <Photos url={
                photo.url.regular
            }
                key={photo.id}
            />
        );

    } else if (props.isLoading === false) {
        photos = <NotFound />

    }




    return (
        <div className="photo-container" >
            <h2> {
                props.title
            } </h2> <ul> {
                photos
            } </ul>
        </div>
    );
};
export default Gallery;