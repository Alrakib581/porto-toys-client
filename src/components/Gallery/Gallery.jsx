import React, { useEffect, useState } from 'react';
import GalleryCard from '../GallerCard/GalleryCard';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    //    console.log(gallery)
    return (
        <div className='container my-5'>
            <h4 className='text-center company-name'>Toy Gallery</h4>
            <div className="row  my-5">
                {
                    gallery.map(pic => <GalleryCard
                        key={pic._id}
                        pic={pic}
                    ></GalleryCard>)
                }

            </div>
        </div>
    );
};

export default Gallery;