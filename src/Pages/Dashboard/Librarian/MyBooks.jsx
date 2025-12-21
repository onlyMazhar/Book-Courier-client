import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth } from '../../../Hooks/useAuth';
import BooksTabel from './BooksTabel';


const MyBooks = () => {
    const { user } = useAuth()
    const { data: myBooks = [] } = useQuery({
        queryKey: ['my-books', user?.email],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/my-books?email=${user.email}`
            );
            return res.data;
        },
        enabled: !!user?.email,
    });

    // console.log('From my-books?email API====================', myBooks)


    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th >Name</th> 
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {myBooks.map(Book => (
                        <BooksTabel
                            key={Book._id}
                            Book={Book}
                        />
                    ))}


                </tbody>
            </table>



        </div>
    );
};

export default MyBooks;



