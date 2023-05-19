import React from 'react';
import './GalleryCard.css'
const GalleryCard = ({pic}) => {
    const {photoUrl} = pic
    return (
        <div className="col-md-4 mb-4">
            <div className=' rounded p-2'>
                <img className='img-fluid rounded' src={photoUrl} alt="gallery image" />
            </div>
        </div>
    );
};

export default GalleryCard;