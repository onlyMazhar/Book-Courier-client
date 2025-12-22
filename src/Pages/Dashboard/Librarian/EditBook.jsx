import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: book } = useQuery({
        queryKey: ['edit-book', id],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/books/edit/${id}`
            );
            return res.data;
        }
    });

    const { register, handleSubmit } = useForm({
        values: book
    });

    const onSubmit = async (data) => {
        await axios.patch(
            `${import.meta.env.VITE_API_URL}/books/edit/${id}`,
            data
        );
        navigate('/dashboard/my-inventories');
    };

    if (!book) return null;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-5xl mx-auto bg-white p-6 rounded-lg my-20 shadow space-y-5"
        >
            <h2 className="text-xl font-semibold border-b pb-2">
                Edit Book
            </h2>

            {/* Book Name */}
            <div>
                <label className="label">
                    <span className="label-text font-medium">Book Name</span>
                </label>
                <input
                    {...register("name", { required: true })}
                    className="input input-bordered w-full"
                    placeholder="Enter book name"
                />
            </div>

            {/* Author */}
            <div>
                <label className="label">
                    <span className="label-text font-medium">Author</span>
                </label>
                <input
                    {...register("author", { required: true })}
                    className="input input-bordered w-full"
                    placeholder="Author name"
                />
            </div>

            {/* Price */}
            <div>
                <label className="label">
                    <span className="label-text font-medium">Price</span>
                </label>
                <input
                    type="number"
                    {...register("price", { required: true, min: 1 })}
                    className="input input-bordered w-full"
                    placeholder="Book price"
                />
            </div>

            {/* Description */}
            <div>
                <label className="label">
                    <span className="label-text font-medium">Description</span>
                </label>
                <textarea
                    {...register("description")}
                    rows={4}
                    className="textarea textarea-bordered w-full"
                    placeholder="Book description"
                />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
                <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => window.history.back()}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Update Book
                </button>
            </div>
        </form>

    );
};

export default EditBook;
