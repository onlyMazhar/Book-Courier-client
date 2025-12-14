import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import axios from "axios";
import { uploadImage } from "../../../utils";
import { useAuth } from "../../../Hooks/useAuth";

const AddBook = () => {
    const { user } = useAuth()
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const handleAddBook = async (data) => {
        const { name, quantity, description, image } = data;
        const imageFile = image?.[0];

        try {
            const imageUrl = await uploadImage(imageFile);

            const bookData = {
                name,
                quantity: Number(quantity),
                description,
                image: imageUrl,
                createdAt: new Date(),
                librarian: {
                    name: user?.displayName,
                    email: user?.email,
                    photo: user?.photoURL
                }
            };

            console.table(bookData);

            // await axios.post("http://localhost:5000/books", bookData);

            reset();
            // navigate("/books");

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="max-w-5xl mx-auto bg-base-100 shadow-md rounded-lg p-6">
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
    );
};

export default AddBook;
