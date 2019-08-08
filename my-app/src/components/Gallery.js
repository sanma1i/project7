import React from 'react';
import Gallery from './Gallery';
import NotFound from './NotFound'
const Gallery = props => {
    return (
        <div className="photo-container">
            <h2> {props.match.params.query}</h2>
            <ul>
                {props.photos.length === 0 ? (
                    <NotFound />

                ) :
                    (props.photos.map(photo => {
                        return <Gallery photo={photo} key={photo.id} />;
                    })
                    )}
            </ul>
        </div>
    );
};
export default Gallery;






