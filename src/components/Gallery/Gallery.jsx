import React, { useEffect, useState } from 'react';
import GalleryCard from '../GallerCard/GalleryCard';
import Loader from '../Loader/Loader';


const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => {
                setGallery(data)
                setIsLoading(false)
            })
    }, [])
    //    console.log(gallery)
    return (
        <div className='container my-5'>
            <h4 className='text-center company-name'>Toy Gallery</h4>
            {
                isLoading && <Loader></Loader>
            }
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