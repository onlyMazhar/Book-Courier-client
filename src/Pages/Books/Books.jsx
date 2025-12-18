import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../../Components/Loader';
import Card from '../../Components/Card';
import Container from '../../Components/Container';

const Books = () => {


    const { data: books = [], isLoading } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/books`)
            return result.data;
        },
    })
    // console.log(result.data)
    // console.log(books)
    if (isLoading) return <Loader />

    return (

        <Container>
            <div className='px-4'>
                {
                    books && books.length > 0
                        ? (
                            <div className="mt-20 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5">
                                {
                                    books.map(book => < Card key={book._id} book={book} />)
                                }
                            </div>
                        )
                        : null
                }
            </div>
        </Container>

    );
};

export default Books;