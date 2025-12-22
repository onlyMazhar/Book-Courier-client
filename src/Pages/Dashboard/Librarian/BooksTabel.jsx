import axios from 'axios';
import { Link } from 'react-router';

const BooksTabel = ({ Book, refetch }) => {
    const { _id, name, image, author, status } = Book;

    const toggleStatus = async () => {
        const newStatus = status === 'published' ? 'unpublished' : 'published';

        await axios.patch(
            `${import.meta.env.VITE_API_URL}/books/status/${_id}`,
            { status: newStatus }
        );

        refetch();
    };

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <img src={image} className="w-12 h-12 rounded-sm" />
                    <div>
                        <div className="font-bold">{name}</div>
                        <small className="text-gray-400">By {author}</small>
                        <div className={`text-xs mt-1 ${
                            status === 'published'
                                ? 'text-green-600'
                                : 'text-red-600'
                        }`}>
                            {status}
                        </div>
                    </div>
                </div>
            </td>

            <td className="flex gap-2">
                <button
                    onClick={toggleStatus}
                    className={`btn btn-xs ${
                        status === 'published'
                            ? 'btn-warning'
                            : 'btn-success'
                    }`}
                >
                    {status === 'published' ? 'Unpublish' : 'Publish'}
                </button>

                <Link to={`/dashboard/edit-book/${_id}`}>
                    <button className="btn btn-xs btn-primary">
                        Edit
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default BooksTabel;
