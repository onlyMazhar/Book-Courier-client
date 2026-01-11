import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const OrderTable = ({ order, refetchOrders }) => {
    const {
        _id,
        bookName,
        writtenBy,
        status,
        createdAt,
        customerEmail,
        customerName,
        address,
    } = order || {};

    const [orderStatus, setOrderStatus] = useState(status || "pending");
    const [loading, setLoading] = useState(false);

    const handleStatusChange = async (newStatus) => {
        try {
            await axios.patch(
                `${import.meta.env.VITE_API_URL}/orders/${order._id}/status`,
                { status: newStatus }
            );
            toast.success("Status Updated")
            setOrderStatus(newStatus);
            if (refetchOrders) refetchOrders(); // refresh the table
        } catch (err) {
            console.error(err);
        }
    };


    // const handleCancel = async () => {
    //     if (!window.confirm("Are you sure you want to cancel this order?")) return;
    //     setLoading(true);
    //     try {
    //         await axios.patch(`${import.meta.env.VITE_API_URL}/orders/${_id}/cancel`);
    //         setOrderStatus("cancelled");
    //         refetchOrders();
    //     } catch (err) {
    //         console.error(err);
    //         alert("Failed to cancel order");
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const handleCancel = async () => {
        // SweetAlert2 Confirmation Dialog
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Are you sure you want to cancel this order?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, cancel it!"
        });

        // If user clicks "Cancel" or closes the modal, stop execution
        if (!result.isConfirmed) return;

        setLoading(true);
        try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/orders/${_id}/cancel`);
            setOrderStatus("cancelled");
            refetchOrders();

            // Success Alert
            Swal.fire({
                title: "Cancelled!",
                text: "Your order has been cancelled.",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });

        } catch (err) {
            console.error(err);
            // Error Alert
            Swal.fire({
                title: "Error!",
                text: "Failed to cancel order",
                icon: "error"
            });
        } finally {
            setLoading(false);
        }
    };

    const statusOptions = ["pending", "shipped", "delivered"];

    return (
        <>
            {/* Desktop / Tablet Row */}
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

                <td>{new Date(createdAt).toLocaleDateString()}</td>

                <td>
                    {orderStatus !== "cancelled" ? (
                        <select
                            value={orderStatus}
                            onChange={(e) => handleStatusChange(e.target.value)}
                            className="select select-sm rounded-full w-24"
                            disabled={loading}
                        >
                            {statusOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    ) : (
                        <span className="text-red-600 font-semibold">Cancelled</span>
                    )}
                </td>

                <td>
                    <button
                        onClick={handleCancel}
                        className="btn btn-sm bg-red-600 text-white rounded-full"
                        disabled={orderStatus === "cancelled" || loading}
                    >
                        Cancel
                    </button>
                </td>
            </tr>

            {/* Mobile Card */}
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
                            {orderStatus !== "cancelled" ? (
                                <select
                                    value={orderStatus}
                                    onChange={(e) => handleStatusChange(e.target.value)}
                                    className="select select-sm rounded-full w-22"
                                >
                                    <option value="pending">pending</option>
                                    <option value="shipped">shipped</option>
                                    <option value="delivered">delivered</option>
                                </select>

                            ) : (
                                <span className="text-red-600 font-semibold">Cancelled</span>
                            )}

                            <button
                                className="btn btn-sm bg-red-600 text-white rounded-full"
                                onClick={handleCancel}
                                disabled={orderStatus === "cancelled" || loading}
                            >
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