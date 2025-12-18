import React from 'react';
import Container from './Container';
import { Link } from 'react-router';

const Card = ({ book }) => {
    // const { name, quantity, description, image, price, category, author} = book
    const {
        _id,
        image,
        name,
        price,
        category

    } = book;
    // console.log(book)

    return (
        <Link to={`/books/${_id}`}>
            <div className="  mx-auto space-y-1">
                {/* Book Cover */}
                <div className="w-full  h-76 overflow-hidden rounded-md shadow">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold leading-tight line-clamp-2 hover:text-blue-600 cursor-pointer"> {name}</h3>

                {/* Author */}
                {/* <p className="text-xs text-gray-600"><span className='font-bold'>By:</span> {author}</p> */}
                <p className="text-xs text-gray-600"><span className='font-bold'>Catagory:</span> {category}</p>

                {/* Price */}
                <p className="text-sm font-semibold">{price}<sup>tk</sup></p>
            </div>

        </Link>
    );
};

export default Card;