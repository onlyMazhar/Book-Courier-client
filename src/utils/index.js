import axios from "axios";

const IMAGE_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_upload}`;

export const uploadImage = (imageFile) => {
    if (!imageFile) {
        return Promise.resolve(null);
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    return axios.post(IMAGE_API_URL, formData)
        .then(res => res.data.data.display_url);
};

