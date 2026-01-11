import { useQuery } from '@tanstack/react-query';
import axios from 'axios'; 
import { useAuth } from '../../../Hooks/useAuth';
import Loader from '../../../Components/Loader';
import Card from '../../../Components/Card';
import Container from '../../../Components/Container';

const Wishlist = () => {
    const { user } = useAuth();

    const { data: wishlist = [], isLoading } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });

    if (isLoading) return <Loader />;

    return (
        <Container>
            <div className='px-4 py-10'>
                <h2 className="text-3xl font-black mb-10">My Wishlist</h2>
                {wishlist.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {wishlist.map(book => <Card key={book._id} book={book} />)}
                    </div>
                ) : (
                    <div className="text-center py-20 opacity-30">
                        <p className="text-2xl font-bold">Your wishlist is empty</p>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Wishlist;