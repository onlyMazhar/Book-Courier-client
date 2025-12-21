import { useState } from "react";

const OrderTable = ({ order }) => {
    const {
        bookName,
        writtenBy,
        status,
        createdAt,
        customerEmail,
        customerName,
        address,
    } = order || {};

    const [orderStatus, setOrderStatus] = useState(status || "pending");

    return (
        <>
            {/* ===== Desktop / Tablet Row ===== */}
            <tr className="hidden md:table-row">
                <td>
                    <p className="font-bold">{customerName}</p>
                    <p className="text-sm text-gray-400">{address}</p>
                    <small className="text-gray-400">{customerEmail}</small>
                </td>

                <td>
                    <p className="font-bold">{bookName}</p>
                    <small className="text-gray-400">By {writtenBy}</small>
                </td>

                <td>
                    {new Date(createdAt).toLocaleDateString()}
                </td>

                <td>
                    <select
                        value={orderStatus}
                        onChange={(e) => setOrderStatus(e.target.value)}
                        className="select select-sm rounded-full w-22"
                    >
                        <option value="pending">pending</option>
                        <option value="shipped">shipped</option>
                        <option value="delivered">delivered</option>
                    </select>
                </td>

                <td>
                    <button className="btn btn-sm bg-red-600 text-white rounded-full">
                        Cancel
                    </button>
                </td>
            </tr>

            {/* ===== Mobile Card ===== */}
            <tr className="md:hidden">
                <td colSpan="5">
                    <div className="bg-white rounded-xl shadow p-4 space-y-3">
                        <div>
                            <p className="font-bold text-lg">{customerName}</p>
                            <p className="text-sm text-gray-400">{address}</p>
                            <p className="text-sm text-gray-400">{customerEmail}</p>
                        </div>

                        <div>
                            <p className="font-semibold">{bookName}</p>
                            <p className="text-sm text-gray-400">By {writtenBy}</p>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span>Date</span>
                            <span>{new Date(createdAt).toLocaleDateString()}</span>
                        </div>

                        <div className="flex justify-between items-center gap-2">
                            <select
                                value={orderStatus}
                                onChange={(e) => setOrderStatus(e.target.value)}
                                className="select select-sm rounded-full w-32"
                            >
                                <option value="pending">pending</option>
                                <option value="shipped">shipped</option>
                                <option value="delivered">delivered</option>
                            </select>

                            <button className="btn btn-sm bg-red-600 text-white rounded-full">
                                Cancel
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default OrderTable;
