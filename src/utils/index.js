import axios from "axios";

const IMAGE_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_upload}`;

export const uploadImage = async (imageFile) => {
    if (!imageFile) {
        return null;
    }

    try {
        const formData = new FormData();
        formData.append("image", imageFile);

        const res = await axios.post(IMAGE_API_URL, formData);
        return res.data.data.display_url;
    } catch (error) {
        console.error("Image upload failed:", error);
        throw error; // important: let caller handle failure
    }
};
