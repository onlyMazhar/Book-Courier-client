import axios from 'axios';
import { useAuth } from '../../Hooks/useAuth';


const PayModal = ({ order, onClose }) => {
    const { user } = useAuth();
    const { _id, bookName, bookImg, price, librarian,   category, quantity, writtenBy } = order || {};
    // console.log("----------------------  -- from modal -- --INFO HERE_---------------------->>>>>>>>>> ", order)

    const handlePayment = async () => {
        const orderInfo = {
            bookId: _id,
            bookName,
            category,
            price: price,
            quantity,
            bookImg,
            writtenBy ,
            librarian,
            customer: {
                customerName: user?.displayName,
                customerEmail: user?.email,
                imgae: user?.photoURL
            }
        }

        const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/create-checkout-seassion`,
            orderInfo
        );
// console.log("---------------------- Order INFO HERE_---------------------->>>>>>>>>> ", orderInfo)
        window.location.href = data.url;
    };

    return (
        <dialog open className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-xl mb-4">Confirm Payment</h3>
                <div className=' w-full py-2'>
                    <img src={bookImg} className='mx-auto w-full h-96 object-cover object-top-right rounded-lg' />
                </div>
                <p><strong>Book:</strong> {bookName}</p>
                <p><strong>Quantity:</strong> {1}</p>
                <p><strong>Price:</strong> {price}</p>

                <div className="modal-action">
                    <button className="btn btn-outline" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-success text-white"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default PayModal;
