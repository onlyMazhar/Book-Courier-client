import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { formatDate, timeAgo } from '../../../utils/formatDate'
import axios from 'axios';

const OrderTable = ({ order }) => {
    // console.log(order)
    const { user } = useAuth()
    const { _id, writtenBy, bookImg, bookName, status, price, createdAt } = order;



    const handlePayment = async () => {
        const paymentInfo = {
            bookId: _id,
            bookName,
            price,
            bookImg,
            quantity: 1,
            customer: {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
            }
        }

        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/create-checkout-seassion`, paymentInfo)
        window.location.href = data.url
        console.log(data.url)

    }


    return (

        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-sm h-12 w-12">
                            <img
                                src={bookImg}
                                alt={`Image of ${bookName}`} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{bookName}</div>
                        <small className=" text-gray-400"> By {writtenBy}</small>
                    </div>
                </div>
            </td>
            <td>
                <p>{formatDate(createdAt)}</p>
                <small className='text-gray-400'>{timeAgo(createdAt)}</small>
            </td>


            <td>{price}</td>
            <td>Unpaid</td>
            <td className={status === 'pending' ? 'text-red-600' : " "}>{status}</td>
            <th  >
                <button className="btn btn-primary btn-xs md:mr-6  mb-3 md:mb-0 "
                    onClick={() => document.getElementById("pay_modal").showModal()}
                >  Pay </button>

                {/* Modal */}
                <dialog id="pay_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl mb-4">Confirm Book Borrow</h3>

                        {/* Book Info */}
                        <div className="space-y-2">
                            <p>Book: <span className='font-normal'>{bookName} </span></p>

                            <p className="font-semibold">Price: {" "}<span className="font-normal" >{price} tk</span>  </p>

                            {/* Quantity */}
                            <div className="flex items-center gap-1">
                                <p >Quantity:</p>
                                <p className="font-normal">2</p>
                            </div>

                            {/* Total */}
                            <p className="text-lg font-bold pt-2">Total: 500</p>
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
                <button className={status === "panding" ? "disable text-gray-300" : "btn btn-outline btn-xs "}>Cancel</button>
            </th >
        </tr >

    );
};

export default OrderTable;