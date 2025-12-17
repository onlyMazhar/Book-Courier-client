import React from 'react';
import Loader from '../../Components/Loader';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth } from '../../Hooks/useAuth';

const BookDetails = () => {
    const { user } = useAuth()
    const { id } = useParams();
    const { data: books = {}, isloading } = useQuery({
        queryKey: ['book', id],
        queryFn: async () => {
            const all = await axios(`${import.meta.env.VITE_API_URL}/books/${id}`)
            return all.data.result;
        }
    })
    console.log(books)
    const { _id, name, category, author, price, image, quantity, description, librarian } = books;

    const handlePayment = async () => {
        const paymentInfo = {
            plantID: _id,
            name,
            category,
            price,
            image,
            quantity: 1,
            customer: {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
            }
        }

        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/create-checkout-seassion`, paymentInfo)
        window.location.href = data.url
        console.log(data.url)

    }

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

                    <button className="btn text-primary border-primary btn-sm w-full">
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


                    {/* ----------------Modal ------------------- */}
                    <button
                        className="btn btn-primary"
                        onClick={() => document.getElementById("pay_modal").showModal()}
                    > Borrow / Pay <p>{price}<sup>tk</sup></p></button>

                    {/* Modal */}
                    <dialog id="pay_modal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-xl mb-4">Confirm Book Borrow</h3>

                            {/* Book Info */}
                            <div className="space-y-2">
                                <p><span className="font-semibold">Book:</span>{name}</p>

                                <p className="font-semibold">Price: {" "}<span className="font-normal" >{price}</span> tk </p>

                                {/* Quantity */}
                                <div className="flex items-center gap-3">
                                    <p className="font-semibold">Quantity:</p>
                                    <p>2</p>
                                </div>

                                {/* Total */}
                                <p className="text-lg font-bold pt-2">
                                    Total: 500
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="modal-action pt-5 ">
                                <form method="dialog" className="flex w-full justify-between   w gap-3">
                                    <button className="btn btn-outline">
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success text-white"
                                        onClick={handlePayment}
                                    >
                                        Pay Now
                                    </button>
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