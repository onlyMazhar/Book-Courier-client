import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageBooks = () => {
    const axiosSecure = useAxiosSecure(); // secure axios instance
    const queryClient = useQueryClient();

    // Fetch all books
    const { data: books = [], isLoading } = useQuery({
        queryKey: ['admin-books'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/books');
            return res.data;
        },
    });

    // Mutation to toggle book status (publish/unpublish)
    const updateStatusMutation = useMutation({
        mutationFn: async ({ bookId, newStatus }) => {
            return axiosSecure.patch(`/admin/book/${bookId}/status`, { status: newStatus });
        },
        onSuccess: () => {
            toast.success('Book status updated!');
            queryClient.invalidateQueries(['admin-books']);
        },
        onError: (err) => {
            console.error(err);
            toast.error('Failed to update book status');
        },
    });

    // Mutation to delete a book
    const deleteBookMutation = useMutation({
        mutationFn: async (bookId) => {
            return axiosSecure.delete(`/admin/book/${bookId}`);
        },
        onSuccess: () => {
            toast.success('Book deleted successfully!');
            queryClient.invalidateQueries(['admin-books']);
        },
        onError: (err) => {
            console.error(err);
            toast.error('Failed to delete book');
        },
    });

    const handleToggleStatus = (book) => {
        const newStatus = book.status === 'published' ? 'unpublished' : 'published';
        updateStatusMutation.mutate({ bookId: book._id, newStatus });
    };

    const handleDelete = async (book) => {
        const result = await Swal.fire({
            title: `Delete "${book.name}"?`,
            text: 'This will also delete all orders for this book!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        });

        if (result.isConfirmed) {
            deleteBookMutation.mutate(book._id);
        }
    };

    if (isLoading)
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading...</p>
            </div>
        );

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Librarian</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td className="flex items-center gap-3">
                                <img src={book.image} alt={book.name} className="w-12 h-12 rounded-sm" />
                                <div>
                                    <p className="font-bold">{book.name}</p>
                                    <small className="text-gray-400">By {book.author}</small>
                                </div>
                            </td>
                            <td>
                                <p>{book.librarian?.name}</p>
                                <small className="text-gray-400">{book.librarian?.email}</small>
                            </td>
                            <td>
                                <button
                                    className={`btn btn-sm ${book.status === 'published' ? 'btn-success' : 'btn-warning'
                                        }`}
                                    onClick={() => handleToggleStatus(book)}
                                >
                                    {book.status}
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm bg-red-600 text-white"
                                    onClick={() => handleDelete(book)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBooks;
