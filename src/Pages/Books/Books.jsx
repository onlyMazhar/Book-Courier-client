import axios from 'axios';
import React from 'react';

const Books = () => {
    const { data } = axios.get(`${import.meta.env.VITE_API_URL}/books`)
    console.log(data)
    return (
        <div>
            Books Data here
        </div>
    );
};

export default Books;