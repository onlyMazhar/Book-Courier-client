import React from 'react';
import Loader from '../../Components/Loader';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BookDetails = () => {
    const { id } = useParams();
    const { data: books = {}, isloading } = useQuery({
        queryKey: ['book', id],
        queryFn: async () => {
            const all = await axios(`${import.meta.env.VITE_API_URL}/books/${id}`)
            return all.data.result;
        }
    })
    console.log(books)
    const { name, category, author, price, image, quantity, description, librarian } = books;

    if (isloading) {
        return (
            <Loader />
        );
    }

    if (!books) {
        return (
            <div className="text-center min-h-[70vh] content-center text-3xl md:text-4xl lg:text-7xl font-bold text-gray-200 mt-20">
                Book not found
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-[260px_1fr] gap-8 bg-base-100 p-6">

                {/* LEFT: Book Image */}
                <div className="flex flex-col i-center items-center gap-4">
                    <img
                        src={image}
                        alt={name}
                        className="w-full max-w-60 h-auto object-cover rounded"
                    />

                    <button className="btn btn-outline btn-sm w-full">
                        Read sample
                    </button>
                    <div className="flex items-center gap-3 pt-4  ">
                        <img
                            src={librarian?.photo}
                            alt={librarian?.name}
                            className="w-10 h-10 rounded-full border"
                        />
                        <div>
                            <p className="text-sm font-semibold">
                                {librarian?.name}
                            </p>
                            <p className="text-xs text-gray-400">
                                {librarian?.email}
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Book Info */}
                <div className="space-y-3">

                    {/* Title */}
                    <h1 className="text-2xl font-bold leading-snug">
                        {name}
                    </h1>

                    {/* Author */}
                    <p className="text-sm text-gray-600">
                        by <span className="text-blue-600 hover:underline cursor-pointer">
                            {author}
                        </span>{" "}
                        <span className="text-gray-400">(Author)</span>
                    </p>

                    {/* Meta Info */}
                    <p className="text-sm text-gray-500">
                        Paperback — <span className="font-medium">
                            {new Date().toLocaleDateString()}
                        </span>
                    </p>

                    {/* Rating (static placeholder) */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-orange-500">★★★★☆</span>
                        <span className="text-blue-600 hover:underline cursor-pointer">
                            137 ratings
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed pt-2">
                        {description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pt-2">
                        <li>Engaging and informative content</li>
                        <li>Easy to read and understand</li>
                        <li>Perfect for casual learning</li>
                        <li>Ideal for all age groups</li>
                    </ul>

                    {/* Category & Quantity */}
                    <div className="pt-3 text-sm text-gray-600 space-y-1">
                        <p>
                            <span className="font-medium">Category:</span>{" "}
                            {Array.isArray(category) ? category.join(", ") : category}
                        </p>
                        <p>
                            <span className="font-medium">Available:</span>{" "}
                            {quantity} copies
                        </p>
                    </div>

                    {/* Librarian Info */}


                    {/* Action */}
                    <div className=' border-t'>
                        <button className="btn btn-primary mt-5 w-fit ">
                            Borrow Book : <p>{price}<sup>tk</sup></p>
                        </button>
                    </div>




                    {/* Mdal setup  */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>
        </div>

    );
};

export default BookDetails;