
import { HiOutlineXCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ToysRow = ({ toys, handleDelete }) => {
    const { name, toyName, subCategory, price, quantity, email, rating, _id } = toys;
    return (
        <>
            <tr className=''>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>{price} taka</td>
                <td>{quantity} pice</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{rating}</td>
                <td>
                    <Link className='btn btn-outline-success' to={`/updateToy/${_id}`}>Update</Link>
                    <button onClick={() => handleDelete(_id)} className='btn'><HiOutlineXCircle className='fs-1 text-danger'></HiOutlineXCircle></button>
                </td>
            </tr>
        </>
    );
};

export default ToysRow;