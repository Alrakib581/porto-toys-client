import React from 'react';
import { Link } from 'react-router-dom';

const FooterCard = ({fData}) => {
    // console.log(fData)
    const {title,description}= fData;
    // console.log(description)
    return (
        <div className="col-md-3">
            <h5>{title}</h5>
           {
             description.map( (data, idx) => <p key={idx} ><Link className='nav-link fw-semibold'  to={data?.url}>{data?.utitle}</Link></p>)
           }
        </div>
    );
};

export default FooterCard;