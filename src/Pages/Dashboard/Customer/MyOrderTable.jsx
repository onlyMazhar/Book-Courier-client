import React from 'react';

const MyOrderTable = ({ order, setSelectedOrder }) => {
    const { bookName, bookImg, writtenBy, status, price, createdAt } = order || {};
    console.log("From Order Table---------------------------------------------- ",order)

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <img src={bookImg} className="w-12 h-12 rounded-sm" />
                    <div>
                        <div className="font-bold">{bookName}</div>
                        <small className="text-gray-400">By {writtenBy}</small>
                    </div>
                </div>
            </td>

            <td>{new Date(createdAt).toLocaleDateString()}</td>
            <td>{price}</td>
            <td>Unpaid</td>
            <td className={status === 'pending' ? 'text-red-600' : ''}>
                {status}
            </td>

            <td>
                <button
                    className="btn btn-primary btn-xs"
                    onClick={() => setSelectedOrder(order)}
                >
                    Pay
                </button>
            </td>
        </tr>
    );
};

export default MyOrderTable;