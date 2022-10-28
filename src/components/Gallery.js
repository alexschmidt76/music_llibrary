import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery(props) {

    const display = props.data.map((item, i) => <GalleryItem item={item} key={i} />);

    return (
        <div>
            {display}
        </div>
    );
}

export default Gallery;