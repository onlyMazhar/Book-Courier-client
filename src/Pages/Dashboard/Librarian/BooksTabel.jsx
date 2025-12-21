import React from 'react';
import { Link } from 'react-router';

const BooksTabel = ({ Book }) => {
    console.log("Books Row Dataaaa---------- ", Book)
    const { name, image, author } = Book;

    return (
        <tr>
            <td >
                <div className="flex items-center gap-3">
                    <img src={image} className="w-12 h-12 rounded-sm" />
                    <div>
                        <div className="font-bold">{name}</div>
                        <small className="text-gray-400">By {author}</small>
                    </div>
                </div>
            </td>
 
            <td>
                <Link>
                    <button className='btn btn-primary rounded-full w-18'>Edit</button>
                </Link>
            </td>




        </tr>
    );
};

export default BooksTabel;