import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";
import { uploadImage } from "../../../utils";
import { useAuth } from "../../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const AddBook = () => {
    const { user } = useAuth()
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset } = useForm();

    const { mutateAsync, reset: mutationReset } = useMutation({
        mutationFn: async payload => {
            await axios.post(`${import.meta.env.VITE_API_URL}/books`, payload)
        },
        onSuccess: (data) => {
            console.log("onsuccess->>", data)
            toast.success("Book Added")
            mutationReset()
        },
        onError: error => console.log(error),
        // onMutate: payload => console.log(payload)
        onSettled: (data, error) => {
            if (data) console.log("data print here", data)
            if (error) console.log('error', error)
        }
    })

    const handleAddBook = async (data) => {
        const { name, quantity, description, image, price, category, author, status } = data;
        const imageFile = image?.[0];

        try {
            const imageUrl = await uploadImage(imageFile);
            const bookData = {
                name,
                quantity: Number(quantity),
                description,
                category,
                author,
                status ,
                image: imageUrl,
                price: Number(price),
                createdAt: new Date(),
                librarian: {
                    name: user?.displayName,
                    email: user?.email,
                    photo: user?.photoURL
                }
            };
            await mutateAsync(bookData)
            // console.table(bookData);
            // console.log("link conole",import.meta.env.VITE_API_URL)
            // const { data } = console.log(data)
            reset();
            navigate("/books");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="min-w-full  min-h-[86vh] content-center">
            <div className="max-w-5xl  mx-auto   rounded-lg  ">
                <h2 className="text-xl font-semibold mb-6">Upload Book</h2>

                <form onSubmit={handleSubmit(handleAddBook)} className="grid md:grid-cols-3 gap-6">

                    {/* LEFT: Image Upload */}
                    <div className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6">
                        <p className="text-sm text-gray-500 mb-2">Book Cover Image</p>

                        <input
                            type="file"
                            {...register("image", { required: "Book image is required" })}
                            className="file-input file-input-bordered w-full"
                        />

                        {errors.image && (<p className="text-sm text-red-500 mt-2">{errors.image.message}</p>)}
                    </div>

                    {/* RIGHT: Book Info */}
                    <div className="md:col-span-2 space-y-4">

                        {/* Book Name */}
                        <div>
                            <label className="label">Book Name</label>
                            <input
                                type="text"
                                placeholder="Enter book name"
                                {...register("name", { required: "Book name is required" })}
                                className="input input-bordered w-full"
                            />

                            {errors.name && (<p className="text-sm text-red-500">{errors.name.message}</p>)}

                        </div>
                        {/* author */}
                        <div>
                            <label className="label">Author Name</label>
                            <input
                                type="text"
                                placeholder="Enter book author name"
                                {...register("author", { required: "Book author name is required" })}
                                className="input input-bordered w-full"
                            />

                            {errors.author && (<p className="text-sm text-red-500">{errors.author.message}</p>)}

                        </div>
                        {/* Book category */}
                        <div>
                            <label className="label">
                                <span className="label-text">Book Category</span>
                            </label>

                            <select
                                defaultValue=""
                                {...register("category", { required: "Book category is required" })}
                                className="select select-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select book category
                                </option>
                                <option value="romantic">Romantic</option>
                                <option value="horror">Horror</option>
                                <option value="fiction">Fiction</option>
                                <option value="drama">Drama</option>
                                <option value="history">History</option>
                            </select>

                            {errors.category && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.category.message}
                                </p>
                            )}
                        </div>
                        {/* Status */}
                        <div>
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>

                            <select
                                defaultValue="published"
                                {...register("status", { required: "Status is required" })}
                                className="select select-bordered w-full"
                            >
                                <option value="published">Published</option>
                                <option value="unpublished">Unpublished</option>
                            </select>

                            {errors.status && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.status.message}
                                </p>
                            )}
                        </div>

                        {/* Price */}
                        <div>
                            <label className="label">Price</label>
                            <input
                                type="number"
                                min={1}
                                placeholder="Book Price"
                                {...register("price", {
                                    required: "Price is required",
                                    min: { value: 1, message: "Minimum quantity is 1" }
                                })}
                                className="input input-bordered w-full"
                            />

                            {errors.price && (<p className="text-sm text-red-500">{errors.price.message}</p>)}

                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="label">Quantity</label>
                            <input
                                type="number"
                                min={1}
                                placeholder="Available quantity"
                                {...register("quantity", {
                                    required: "Quantity is required",
                                    min: { value: 1, message: "Minimum quantity is 1" }
                                })}
                                className="input input-bordered w-full"
                            />

                            {errors.quantity && (<p className="text-sm text-red-500">{errors.quantity.message}</p>)}

                        </div>

                        {/* Description */}
                        <div>
                            <label className="label">Description</label>
                            <textarea
                                rows={4}
                                placeholder="Book description"
                                {...register("description", {
                                    required: "Description is required",
                                    minLength: {
                                        value: 20,
                                        message: "Description should be at least 20 characters"
                                    }
                                })}
                                className="textarea textarea-bordered w-full"
                            ></textarea>

                            {errors.description && (<p className="text-sm text-red-500">{errors.description.message}</p>)}

                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-3 pt-4">
                            <button type="submit" className="btn btn-primary">
                                Upload Book
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
